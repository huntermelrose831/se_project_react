import "./Header.css";
import logo from "../../assets/wtwrlogo.svg";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleLoginClick,
  handleSignUpClick,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  // Helper for placeholder avatar
  const getInitial = (name) => (name ? name[0].toUpperCase() : "U");

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img alt="Logo" className="header__logo" src={logo} />
      </Link>

      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>

      <ToggleSwitch />

      {isLoggedIn ? (
        <>
          <button
            type="button"
            onClick={handleAddClick}
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>

          <div className="header__user-container">
            <p className="header__username">{currentUser?.name || "User"}</p>
            <Link to="/profile" className="header__profile-link">
              {currentUser?.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name || "User"}
                  className="header__avatar"
                />
              ) : (
                <div className="header__avatar-placeholder">
                  {getInitial(currentUser?.name)}
                </div>
              )}
            </Link>
          </div>
        </>
      ) : (
        <div className="header__auth-buttons">
          <button
            type="button"
            onClick={handleSignUpClick}
            className="header__signup-btn"
          >
            Sign Up
          </button>
          <button
            type="button"
            onClick={handleLoginClick}
            className="header__login-btn"
          >
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
