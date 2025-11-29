import { ArrowDown, Bike, Clock, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link
      to={`/restaurant/${item.id}`}
      className=" relative shadow overflow-hidden hover:bg-gray-200 hover:shadow-lg cursor-pointer transition duration-300 "
    >
      <span className="absolute end-1 top-2 text-white px-3 py-1 bg-red-500 rounded-md ">
        {item.distance} km uzakta
      </span>

      <img
        className="w-full h-[250px] object-cover lg:h-[200px]"
        src={item.photo}
        alt={item.id}
      />

      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-2xl md:text-xl">{item.name}</h3>
          <p className="flex items-center gap-2 text-red-500">
            <Star /> {item.rating}{" "}
          </p>
        </div>

        <div className="flex items-center text-zinc-700 my-3">
          <ArrowDown className="size-5" />
          <span>₺{item.minPrice}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Clock className="text-red-500" />
            <span className="text-zinc-700">{item.estimatedDelivery} dk.</span>
          </div>

          {item.isDeliveryFree && (
            <div className="flex items-center gap-2 font-semibold">
              <Bike className="size-5" />
              <span className="text-gray-500">Ücretsiz</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
