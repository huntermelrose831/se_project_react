import "./ItemModal.css";
import { useContext } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";

function ItemModal({ activeModal, onClose, card, handleDeleteItem }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwner = card.owner === currentUser?._id;

  return (
    <div
      className={`modal_image ${activeModal === "preview" && "modal__opened"}`}
    >
      <div className="modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close_image"
        ></button>{" "}
        <img
          src={card.imageUrl}
          alt={card.name}
          className="modal__image_type_image"
        />
        <div className="modal__footer">
          {isOwner && (
            <button
              onClick={() => handleDeleteItem(card._id)}
              className="modal__delete"
            >
              Delete Item
            </button>
          )}
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
