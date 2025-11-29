import api from "../../api";
import ACTION_TYPES from "./actionTypes";

export const getRestaurants = () => {
  return async (dispatch) => {
    dispatch({ type: ACTION_TYPES.REST_LOADING });

    api
      .get("/restaurants")
      .then((res) =>
        dispatch({ type: ACTION_TYPES.REST_SUCCES, payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: ACTION_TYPES.REST_ERROR, payload: err.message })
      );
  };
};
