import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Product/ProductCard";
import { ActionTypes } from "../../redux/ActionTypes";
import { useEffect } from "react";

const saveFavorite = (favoriteData) => {
  localStorage.setItem("favorite", JSON.stringify(favoriteData));
};

const Favorite = () => {
  const favorite = useSelector((state) => {
    return state.favorite.favorite;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const local = localStorage.getItem("favorite");
    if (local) {
      dispatch({ type: ActionTypes.ADD_TO_FAVORITE, payload: local });
    }
  }, [dispatch]);

  useEffect(() => {
    saveFavorite(favorite);
  }, [favorite]);

  return (
    <div>
      <div class="flex p-10">
        {favorite.slice(1, favorite.length + 1).map((el) => (
          <ProductCard element={el} />
        ))}
      </div>
      <button
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => {
          dispatch({ type: ActionTypes.DELETE_FAVORITE });
          localStorage.removeItem("favorite");
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Favorite;
