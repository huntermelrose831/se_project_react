import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import { defaultClothingItems } from "../../utils/constants.js";
import { filterTemp } from "../../utils/WeatherAPI.js";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "./Main.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnit.jsx";
function Main({ weatherData, handleCardClick }) {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p onChange={handleToggleSwitchChange} className="cards__text">
          Today is{" "}
          {weatherData.temp &&
          typeof weatherData.temp === "object" &&
          (typeof weatherData.temp[currentTemperatureUnit] === "number" ||
            typeof weatherData.temp[currentTemperatureUnit] === "string")
            ? `${weatherData.temp[currentTemperatureUnit]}° ${currentTemperatureUnit}`
            : ""}
          &deg; / You may want to wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === filterTemp(weatherData.temp);
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}
export default Main;
