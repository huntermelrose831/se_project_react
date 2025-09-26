import "./ItemModal.css";

function ItemModal({
  activeModal,
  onClose,
  card,
  handleDeleteItem,
  currentUser,
}) {
  const isOwner = card.owner === currentUser?._id;

  const itemDeleteButtonClassName = `
    modal__delete ${isOwner ? "modal__delete_visible" : "modal__delete_hidden"}
  `;

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
          <button
            onClick={() => handleDeleteItem(card._id)}
            className={itemDeleteButtonClassName}
          >
            Delete Item
          </button>
          <h2 className="modal__caption">{card.name}</h2>

          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
