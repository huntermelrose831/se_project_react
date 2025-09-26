import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";
function Profile({ onCardClick, clothingItems, handleAddClick, currentUser }) {
  return (
    <>
      <div className="profile">
        <section className="profile__sidebar">
          <SideBar currentUser={currentUser} />
        </section>
        <section className="profile__clothing-items">
          <ClothesSection
            clothingItems={clothingItems}
            onCardClick={onCardClick}
            handleAddClick={handleAddClick}
          />
        </section>
      </div>
    </>
  );
}
export default Profile;
