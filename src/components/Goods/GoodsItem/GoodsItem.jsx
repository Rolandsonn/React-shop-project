import React from "react";
import defImage from "../../../images/default_image.png";
export default function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,

    addToBasket = Function.prototype,
  } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt="Poster not available" />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id,
              name,
              price,
            })
          }
        >
          Купить
        </button>
        <span className="right">{price} руб.</span>
      </div>
    </div>
  );
}
