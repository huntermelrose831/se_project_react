import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./ItemCard.css";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  // Safe check for currentUser and currentUser._id
  const isLiked =
    currentUser && currentUser._id && item.likes
      ? item.likes.some((id) => id === currentUser._id)
      : false;

  const handleClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    if (typeof onCardLike === "function") {
      onCardLike({ id: item._id, isLiked });
    }
  };

  return (
    <li className="card">
      <h2 className="card__title">{item.name}</h2>
      <img
        onClick={handleClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      {/* Only show like button if user is logged in */}
      {currentUser && currentUser._id && (
        <button
          className={`card__like-button${
            isLiked ? " card__like-button_active" : ""
          }`}
          onClick={handleLike}
          aria-label={isLiked ? "Unlike" : "Like"}
        ></button>
      )}
    </li>
  );
}

export default ItemCard;
