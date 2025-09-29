import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const handleCardClick = () => {
    onCardClick(item);
  };
  const isLiked =
    currentUser && currentUser._id
      ? item.likes.some((id) => id === currentUser._id)
      : false;
  const handleLike = () => {
    console.log(onCardLike);
    onCardLike({ id: item._id, isLiked });
  };
  return (
    <li className="card">
      <h2 className="card__title">{item.name}</h2>
      {currentUser._id && (
        <button
          className={`card__like-button${
            isLiked ? " card__like-button_active" : ""
          }`}
          onClick={handleLike}
          aria-label={isLiked ? "Unlike" : "Like"}
        ></button>
      )}
      <img
        onClick={handleCardClick}
        role="button"
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}
export default ItemCard;
