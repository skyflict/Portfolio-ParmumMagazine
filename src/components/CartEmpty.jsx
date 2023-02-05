import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <>
      <div class="cart cart--empty">
        <h2>
          Корзина пустая <icon>😕</icon>
        </h2>
        <p>Для того, чтобы сделать заказ, перейдите на главную страницу.</p>
        <img
          src="http://cdn.onlinewebfonts.com/svg/img_567644.png"
          alt="Empty cart"
        />
        <Link to="/" class="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
