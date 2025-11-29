import ACTION_TYPES from "../actions/actionTypes";
const initialState = {
  isLoading: true,
  error: null,
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.BASKET_SUCCES:
      return {
        ...state,
        basket: action.payload,
        error: null,
        isLoading: false,
      };
    case ACTION_TYPES.BASKET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case ACTION_TYPES.BASKET_LOADING:
      return { ...state, isLoading: true };

    case ACTION_TYPES.UPDATE_ITEM:
      const updatedBasket = state.basket.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, basket: updatedBasket };
    case ACTION_TYPES.REMOVE_ITEM:
      const filteredBasket = state.basket.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, basket: filteredBasket };

    case ACTION_TYPES.CREATE_ITEM:
      return { ...state, basket: state.basket.concat(action.payload) };

    default:
      return state;
  }
};

export default basketReducer;
