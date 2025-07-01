import "./Header.css";
import logo from "../../assets/wtwrlogo.svg";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <header className="header">
        <Link to="/se_project_react" className="header__logo-link">
          <img className="header__logo" src={logo} />
        </Link>
        <p className="header__date-location">
          {currentDate}, {weatherData.city}
        </p>

        <ToggleSwitch />

        <button
          type="button"
          onClick={handleAddClick}
          className="header__add-clothes-btn"
        >
          + Add clothes
        </button>

        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <Link to="/se_project_react/profile" className="header__profile-link">
            <img
              src={avatar}
              alt="Terrance Tegegne"
              className="header__avatar"
            />
          </Link>
        </div>
      </header>
    </>
  );
}
export default Header;
