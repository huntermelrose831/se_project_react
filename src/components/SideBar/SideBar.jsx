import { useContext } from "react";
import "./SideBar.css";
import CurrentUserContext from "../../context/CurrentUserContext";

import avatar from "../../assets/avatar.png";
function SideBar({ onEditProfile, onLogout }) {
  const currentUser = useContext(CurrentUserContext); // Get currentUser from context

  return (
    <section className="sidebar">
      <div className="sidebar__title">
        <img
          src={currentUser?.avatar || avatar}
          alt={currentUser?.name || "User"}
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser?.name || "User"}</p>
      </div>
      <button onClick={onEditProfile} className="sidebar__edit-button">
        Change profile data
      </button>
      <button onClick={onLogout} className="sidebar__logout-button">
        Log out
      </button>
    </section>
  );
}
export default SideBar;
