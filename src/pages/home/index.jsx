import React from "react";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { useSelector } from "react-redux";
import Card from "./card";
const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurant
  );

  return (
    <div>
      <div className="container">
        <h1 className="mb-5 font-semibold text-xl md:text-2xl">
          Yakınınızdaki Restoranlar
        </h1>

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {restaurants.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
