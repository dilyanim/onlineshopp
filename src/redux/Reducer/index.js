import { ActionTypes } from "../ActionTypes";

const productStore = {
  product: [],
};
export const MainReducer = (state = productStore, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT:
      return { ...state, product: action.payload };

      default: {
      return state;
    }
  }
};
