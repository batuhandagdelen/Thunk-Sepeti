import api from "../../api";
import ACTION_TYPES from "./actionTypes";

// sepetteki ürünleri al

export const getBasket = () => {
  return async (dispatch) => {
    api
      .get("/cart")
      .then((res) =>
        dispatch({ type: ACTION_TYPES.BASKET_SUCCES, payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: ACTION_TYPES.BASKET_ERROR, payload: err.message })
      );
  };
};

// sepetteki ürün miktarını güncelle

export const updateItem = (id, newAmount) => (dispatch) => {
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    .then((res) =>
      dispatch({ type: ACTION_TYPES.UPDATE_ITEM, payload: res.data })
    )
    .catch((err) => alert("İşlem Başarısız oldu..."));
};

// sepetteki ürünü kaldır

export const removeItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => dispatch({ type: ACTION_TYPES.REMOVE_ITEM, payload: id }))
    .catch(() => alert("İşlem başarısız oldu..."));
};

// sepete yeni ürün ekle

export const createItem = (product) => (dispatch) => {
  const newItem = {
    id: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantId: product.restaurantId,
    amount: 1,
  };

  api
    .post("/cart", newItem)
    .then((res) =>
      dispatch({ type: ACTION_TYPES.CREATE_ITEM, payload: res.data })
    )
    .catch(() => alert("Bir sorun oluştu..."));
};
