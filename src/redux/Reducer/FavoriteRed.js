import { ActionTypes } from "../ActionTypes";

const initialState = {
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
};
export const FavoriteRed = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_FAVORITE:
      const foundFavorite = state.favorite.find(
        (el) => el.id === action.payload.id
      );
      if (foundFavorite) {
        return { ...state, favorite: [...state.favorite] };
      }
      return { ...state, favorite: [...state.favorite, { ...action.payload }] };
    case ActionTypes.DELETE_FAVORITE:
      return { ...state, favorite: [] };

    default: {
      return state;
    }
  }
};
