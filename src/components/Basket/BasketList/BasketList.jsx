import React from "react";
import BasketItem from "../BasketItem";

export default function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    decreaseQuantity = Function.prototype,
    increaseQuantity = Function.prototype,
  } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul class="collection basket-list">
      <li class="collection-item active">Корзина</li>

      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        ))
      ) : (
        <li class="collection-item ">Корзина пуста</li>
      )}
      <li class="collection-item active">Общая стоимость: {totalPrice}</li>
      <li class="collection-item  ">
        <button className="btn btn-small ">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}
