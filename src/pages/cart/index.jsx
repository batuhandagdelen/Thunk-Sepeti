import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import BasketEmpty from "./basketEmpty";
import Card from "./card";
import OrderInfo from "./orderInfo";

const Cart = () => {
  const { isLoading, error, basket } = useSelector((store) => store.basket);

  return (
    <div className="container">
      <h1 className="font-semibold text-2xl mb-5">SEPET</h1>

      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : basket.lengt === 0 ? (
          <BasketEmpty />
        ) : (
          basket.map((item) => <Card key={item.id} product={item} />)
        )}
      </div>

      <div>
        <OrderInfo basket={basket} />
      </div>
    </div>
  );
};

export default Cart;
