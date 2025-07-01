import "./ClothesSection.css";
import { defaultClothingItems } from "../../utils/constants.js";
import ItemCard from "../ItemCard/ItemCard.jsx";
function ClothesSection({ onCardClick }) {
  return (
    <>
      <div className="clothes-section">
        <div>
          <p></p>
          <button>+ Add New</button>
        </div>
        <ul className="clothes-section__items">
          {defaultClothingItems.map((item) => {
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
