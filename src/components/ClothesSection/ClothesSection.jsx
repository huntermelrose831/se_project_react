import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.jsx";
function ClothesSection({ onCardClick, clothingItems, handleAddClick }) {
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
          {clothingItems.map((item) => {
            return (
              <ItemCard key={item._id} item={item} onCardClick={onCardClick} />
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default ClothesSection;
