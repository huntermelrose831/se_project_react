import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Routes, Route, Navigate } from "react-router-dom";

import Profile from "../Profile/Profile.jsx";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import Footer from "../Footer/Footer.jsx";
import "./App.css";

import { coordinates, apiKey } from "../../utils/constants.js";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnit.js";
import CurrentUserContext from "../../context/CurrentUserContext";

import { getWeather, filterWeatherData } from "../../utils/WeatherAPI.js";
import { getItems, postItems, deleteItems } from "../../utils/api.js";
import { addCardLike, removeCardLike, updateProfile } from "../../utils/api";

import { signin, signup, checkToken } from "../../utils/auth.js";

function App() {
  const [clothingItems, setClothingItems] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("jwt")); // Add token state

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    signin({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setToken(data.token); // Update token state
        if (data.token) {
          checkToken(data.token)
            .then((user) => {
              setCurrentUser(user);
              setIsLoggedIn(true);
            })
            .catch(() => {
              localStorage.removeItem("jwt");
              setToken(null);
              setIsLoggedIn(false);
              setCurrentUser({});
            });
        }
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setToken(null); // Clear token state
    setIsLoggedIn(false);
    setCurrentUser({});
    // Optionally, close modals or redirect to home
  };
  const handleRegister = ({ name, avatar, email, password }) => {
    setIsLoading(true);
    signup({ name, avatar, email, password })
      .then(() => {
        // After successful signup, make a proper login request
        return signin({ email, password });
      })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setToken(data.token); // Update token state
        setCurrentUser(data.user);
        setIsLoggedIn(true);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleUpdateUser = ({ name, avatar }) => {
    setIsLoading(true);
    const token = localStorage.getItem("jwt");
    updateProfile(name, avatar, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeActiveModal(); // Close modal
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    setIsLoading(true);
    const token = localStorage.getItem("jwt");
    postItems({ name, imageUrl, weather }, token)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };
  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    (!isLiked ? addCardLike(id, token) : removeCardLike(id, token))
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((item) => (item._id === id ? updatedCard : item))
        );
      })
      .catch(console.error);
  };
  const handleDeleteItem = (id) => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      console.error("No token found in localStorage");
      return;
    }

    deleteItems(id, token)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== id)
        );
        closeActiveModal();
      })
      .catch(console.error);
  };
  const handleSwitchModal = () => {
    if (activeModal === "login") {
      setActiveModal("register");
    } else if (activeModal === "register") {
      setActiveModal("login");
    }
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);
  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);
  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closeActiveModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);
  // Updated useEffect with token dependency
  useEffect(() => {
    if (token) {
      checkToken(token)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch(() => {
          localStorage.removeItem("jwt");
          setToken(null);
          setIsLoggedIn(false);
          setCurrentUser({});
        });
    }
  }, [token]); // Now it runs whenever token changes

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              handleLoginClick={handleLoginClick}
              handleSignUpClick={handleSignUpClick}
              isLoggedIn={isLoggedIn}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  isLoggedIn ? (
                    <Profile
                      clothingItems={clothingItems}
                      onCardClick={handleCardClick}
                      handleAddClick={handleAddClick}
                      onEditProfile={handleEditProfileClick}
                      onLogout={handleLogout}
                      onCardLike={handleCardLike}
                    />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
            </Routes>

            <Footer />
          </div>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={closeActiveModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
            isLoading={isLoading}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            onClose={closeActiveModal}
            onLogin={handleLogin}
            isLoading={isLoading}
            onSwitchModal={handleSwitchModal} 
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={closeActiveModal}
            onRegister={handleRegister}
            isLoading={isLoading}
            onSwitchModal={handleSwitchModal}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            handleDeleteItem={handleDeleteItem}
            isLoading={isLoading}
          />
          <EditProfileModal
            isLoading={isLoading}
            isOpen={activeModal === "edit-profile"}
            onClose={closeActiveModal}
            onUpdateUser={handleUpdateUser}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
