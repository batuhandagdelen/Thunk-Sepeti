import restaurantReducer from "./reducer/restaurantReducer";
import basketReducer from "./reducer/basketReducer";
import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const rootreducer = combineReducers({
  restaurant: restaurantReducer,
  basket: basketReducer,
});

const store = createStore(rootreducer, applyMiddleware(thunk));

export default store;
