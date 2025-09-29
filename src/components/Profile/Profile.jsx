import "./Profile.css";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";
function Profile({
  onCardClick,
  clothingItems,
  handleAddClick,
  currentUser,
  onEditProfile,
  onLogout,
  onCardLike,
}) {
  return (
    <>
      <div className="profile">
        <section className="profile__sidebar">
          <SideBar
            currentUser={currentUser}
            onEditProfile={onEditProfile}
            onLogout={onLogout}
          />
        </section>
        <section className="profile__clothing-items">
          <ClothesSection
            clothingItems={clothingItems}
            onCardClick={onCardClick}
            handleAddClick={handleAddClick}
            onCardLike={onCardLike}
          />
        </section>
      </div>
    </>
  );
}
export default Profile;
