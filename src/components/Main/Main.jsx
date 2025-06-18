import WeatherCard from "../WeatherCard/WeatherCard.jsx";
import { defaultClothingItems } from "../../utils/constants.js";
import { filterTemp } from "../../utils/WeatherAPI.js";
import ItemCard from "../ItemCard/ItemCard.jsx";
import "./Main.css";

function Main({ weatherData, handleCardClick }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp} F / You may want to wear:
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
