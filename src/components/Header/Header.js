import React from "react";
import { AiTwotoneShopping } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import shop from "../../img/Topshop-logo.png";

const Header = () => {
  return (
    <nav class=" bg-white border-gray-200 ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-40 ">
        <div
          style={{
            width: "300px",
            marginLeft: "100px",
            padding: "20px",
          }}
          className="logo-head m-2"
        >
          <h1
            style={{
              color: " rgb(355, 101, 201)",
              fontSize: "30px",
            }}
          >
            FashionShop
          </h1>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <NavLink
                to={"/"}
                class="block py-2 pl-3 pr-4 text-pink-100  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/product"}
                class="block py-2 pl-3 pr-4 text-gray-900  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/basket"}
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Basket
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/favorite"}
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Favorite
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
