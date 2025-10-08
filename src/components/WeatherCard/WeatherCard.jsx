import "./WeatherCard.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnit.js";
import { weatherOptions } from "../../utils/constants.js";
function WeatherCard({ weatherData }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const weatherOptionUrl = filteredOptions[0]?.url;
  const weatherOptionCondition =
    filteredOptions[0]?.condition || "weather condition";
  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp &&
        typeof weatherData.temp === "object" &&
        (typeof weatherData.temp[currentTemperatureUnit] === "number" ||
          typeof weatherData.temp[currentTemperatureUnit] === "string")
          ? `${weatherData.temp[currentTemperatureUnit]}° ${currentTemperatureUnit}`
          : ""}
      </p>
      <img
        src={weatherOptionUrl}
        alt={weatherOptionCondition}
        className="weather-card__image"
      />
    </section>
  );
}
export default WeatherCard;
