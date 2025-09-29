import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

function ClothesSection({
  onCardClick,
  clothingItems,
  handleAddClick,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <>
      <div className="clothes-section">
        <div className="clothes-section__header">
          <p className="clothes-section__title">Your Items</p>
          <button
            onClick={handleAddClick}
            className="clothes-section__add-button"
          >
            + Add New
          </button>
        </div>
        <ul className="clothes-section__items">
          {userItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default ClothesSection;
