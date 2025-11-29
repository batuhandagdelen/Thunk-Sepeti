import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  error: null,
  restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.REST_SUCCES:
      return {
        ...state,
        restaurants: action.payload,
        isLoading: false,
        error: null,
      };
    case ACTION_TYPES.REST_LOADING:
      return { ...state, isLoading: true };
    case ACTION_TYPES.REST_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default restaurantReducer;
