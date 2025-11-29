import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Flame } from "lucide-react";
import Card from "./card";

const RestaurantProducts = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  console.log(products);
  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  if (error) return <Error message={error} />;

  return (
    <div>
      <h2 className="flex items-center gap-2 font-bold text-2xl">
        <Flame className="size-7 text-red-500" /> Popüler
      </h2>
      <p className="text-zinc-700">Restoranın en çok tercih edilen ürünleri</p>

      <div className="grid lg:grid-cols-2 gap-5 mt-5">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantProducts;
