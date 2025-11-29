import { Plus } from "lucide-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateItem, createItem } from "../../redux/actions/basketActions";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  // sepet verisine abone ol
  const { basket } = useSelector((store) => store.basket);

  // ekrana basılan ürün sepette varsa onu bul
  const basketItem = basket.find((item) => item.id === product.id);

  // + butonuna tıklanınca
  const handleAdd = () => {
    basketItem // ürün sepette varsa miktarını arttır
      ? dispatch(updateItem(basketItem.id, basketItem.amount + 1))
      : // ürün sepette yoksa ürünü oluştur
        dispatch(createItem(product));
  };

  console.log(basket);
  return (
    <div className="grid grid-cols-[1fr_115px] gap-3 border p-3 shadow hover:bg-red-100 hover:scale-[1.02] cursor-pointer transition">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="font-semibold text-xl">{product.title}</h1>
          <p className="text-zinc-700 my-1">{product.desc}</p>
        </div>
        <p className="font-semibold text-lg">{product.price} ₺</p>
      </div>

      <div className="relative">
        <img
          src={product.photo}
          alt={product.id}
          className="size-full object-cover rounded-md"
        />
        <button
          onClick={handleAdd}
          className="absolute end-2 bottom-2 size-8 bg-white rounded-full grid place-items-center  items-center justify-center hover:bg-red-100 transition cursor-pointer font-bold"
        >
          {basketItem ? basketItem.amount : <Plus />}
        </button>
      </div>
    </div>
  );
};

export default Card;
