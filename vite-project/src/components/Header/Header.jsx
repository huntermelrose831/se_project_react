import "./Header.css";
import logo from "../../assets/wtwrlogo.svg";
import avatar from "../../assets/avatar.png";
function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} />
        <p className="header__date-location">
          {currentDate}, {weatherData.city}
        </p>
        <button
          type="button"
          onClick={handleAddClick}
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>

        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrance Tegegne" className="header__avatar" />
        </div>
      </header>
    </>
  );
}
export default Header;
