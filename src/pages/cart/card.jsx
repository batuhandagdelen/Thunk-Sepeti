import { Minus, Plus, Trash } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateItem, removeItem } from "../../redux/actions/basketActions";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(updateItem(product.id, product.amount + 1));
  };

  const handleMinus = () => {
    dispatch(updateItem(product.id, product.amount - 1));
  };

  const handleRemove = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <div className="flex gap-4 border rounded p-4 mb-10">
      <img
        className="size-[100px] rounded-lg"
        src={product.photo}
        alt={product.id}
      />

      <div className="w-full flex flex-col justify-between">
        <Link className="text-xl font-semibold text-red-500 hover:underline">
          {product.title}
        </Link>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">{product.price}₺</p>

          <div className="flex items-center gap-5">
            <div className="flex items-center border text-xl rounded-lg">
              <button
                onClick={handleMinus}
                disabled={product.amount === 1}
                className="basket-btn disabled:cursor-not-allowed"
              >
                <Minus className="size-4" />
              </button>
              <span>{product.amount}</span>
              <button onClick={handleAdd} className="basket-btn">
                <Plus className="size-4" />
              </button>
            </div>
            <button onClick={handleRemove} className="basket-btn">
              <Trash className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
