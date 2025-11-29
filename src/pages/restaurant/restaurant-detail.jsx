import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "../../api";
import { ArrowDown, Clock, Star } from "lucide-react";
import Loader from "../../components/loader";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    api
      .get(`/restaurants/${id}`)
      .then((res) => setRestaurant(res.data))
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader designs="my-65" />;

  return (
    <div className="flex gap-5">
      <img
        src={restaurant.photo}
        alt={restaurant.id}
        className="size-[150px] rounded-md"
      />
      <div className="flex flex-col justify-between">
        <div className="flex gap-4">
          <p className="flex gap-2">
            <ArrowDown className="text-red-500" />
            <span className="text-zinc-700">min {restaurant.minPrice} TL</span>
          </p>

          <p className="flex gap-2">
            <Clock className="text-red-500" />
            <span className="text-zinc-700">
              ≈{restaurant.estimatedDelivery} dk{" "}
            </span>
          </p>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold">
          {restaurant.name}
        </h1>

        <div className="flex items-center gap-2">
          <Star className="text-red-500" />
          <span className="text-zinc-700">{restaurant.rating}</span>

          <button className="text-red-500 font-semibold rounded hover:bg-red-100 transition py-1 px-3">
            Yorumları Gör
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
