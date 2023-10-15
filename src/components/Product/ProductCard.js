import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../redux/ActionTypes";
import { GoHeartFill } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ProductCard = ({ element, slice, setSlice }) => {
  const [none, setNone] = useState(false);
  const [heart, setHeart] = useState();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (modal) {
      const timeout = setTimeout(() => {
        setModal(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [modal]);

  // const handlePayment = () => {
  //   if (validateForm()) {
  //     setModal(false);
  //   }
  // };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const addToFav = () => {
    dispatch({ type: ActionTypes.ADD_TO_FAVORITE, payload: element });
  };
  const addToBasket = () => {
    dispatch({ type: ActionTypes.ADD_TO_BASKET, payload: element });
  };
  return (
    <>
      <div className="contain mx-7  my-5 basis-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-00 dark:border-gray-700">
        <img
          onClick={openModal}
          onDoubleClick={() => {}}
          className="rounded-t-lg w-15"
          src={element.image}
          alt=""
        />
        <div className="p-5">
          <h5
            onClick={openModal}
            className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-black"
          >
            {element.title}
          </h5>
        </div>

        {isOpen && (
          <div className="modal">
            <div className="panel">
              <div className="right">
                <img
                  onDoubleClick={() => {}}
                  className="img"
                  src={element.image}
                  alt=""
                />
                <h5>{element.title}</h5>
              </div>
              <div className="left">
                <h4 className="">{element.price}</h4>
                <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {element.rating}
                </h4>
                <p>{element.description}</p>
                <div className="flex w-6 justify-between items-center">
                  <NavLink to="/basket">
                    <button
                      className="inline-flex items-center m-2 px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{
                        display: none ? "block" : "none",
                      }}
                      onClick={() => setNone(!none)}
                    >
                      Go to basket
                    </button>
                  </NavLink>
                  <button
                    style={{ display: none ? "none" : "block" }}
                    onClick={() => {
                      addToBasket(element);
                      setNone(!none);
                    }}
                    className="inline-flex items-center w-5 m-10 px-20 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                  >
                    Basket
                    <svg
                      className="w-3.5 h-3.5 ml-20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 0 0"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={addToFav}
                    onDoubleClick={() => setHeart(!heart)}
                    style={{
                      color: heart ? "red" : "",
                    }}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    <GoHeartFill />
                  </button>
                  <button
                    onClick={closeModal}
                    class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                  >
                    Назад{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={() => setSlice(!slice)}
        className="btn text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        style={{ top: slice ? "3811px" : "900px" }}
      >
        {slice ? "свернуть" : "открыть..."}
      </button>
    </>
  );
};

export default ProductCard;
