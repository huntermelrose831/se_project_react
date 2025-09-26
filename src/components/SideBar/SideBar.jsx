import "./SideBar.css";
import avatar from "../../assets/avatar.png";
function SideBar({ currentUser }) {
  return (
    <section className="sidebar">
      <img
        src={currentUser?.avatar || avatar}
        alt={currentUser?.name || "User"}
        className="sidebar__avatar"
      />
      <p className="sidebar__username">{currentUser?.name || "User"}</p>
    </section>
  );
}
export default SideBar;
