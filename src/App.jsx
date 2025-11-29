import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Restaurant from "./pages/restaurant";
import Cart from "./pages/cart";
import Header from "./components/header";
import Footer from "./components/footer";
import { getRestaurants } from "./redux/actions/restaurantActions";
import { useDispatch } from "react-redux";
import { getBasket } from "./redux/actions/basketActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getBasket());
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaurant/:id" element={<Restaurant />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
