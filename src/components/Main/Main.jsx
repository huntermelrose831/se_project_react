import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import { filterTemp } from "../../utils/WeatherAPI.js";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "./Main.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnit.js";
function Main({ weatherData, handleCardClick, clothingItems }) {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  // Check if weather data is loaded
  const isWeatherDataLoaded =
    weatherData && weatherData.temp && typeof weatherData.temp === "object";

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is{" "}
          {isWeatherDataLoaded && weatherData.temp[currentTemperatureUnit]
            ? `${weatherData.temp[currentTemperatureUnit]}° ${currentTemperatureUnit}`
            : "Loading..."}{" "}
          / You may want to wear:
        </p>
        <ul className="cards__list">
          {isWeatherDataLoaded
            ? clothingItems
                .filter((item) => {
                  return item.weather === filterTemp(weatherData.temp.F);
                })
                .map((item) => {
                  return (
                    <ItemCard
                      key={item._id}
                      item={item}
                      onCardClick={handleCardClick}
                    />
                  );
                })
            : []}
        </ul>
      </section>
    </main>
  );
}
export default Main;
