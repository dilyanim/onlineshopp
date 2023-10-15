import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../data";
import ProductCard from "./ProductCard";
import { GET_PRODUCT } from "../../redux/ActionTypes";

const Product = () => {
  const [slice, setSlice] = useState(false);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.main.product);
  useEffect(() => {
    dispatch({ type: GET_PRODUCT, payload: data });
  }, []);
  return (
    <div class=" flex justify-center flex-wrap p-10">
      {product.slice(0, slice ? 21 : 4).map((el) => (
        <ProductCard slice={slice} setSlice={setSlice} element={el} />
      ))}
    </div>
  );
};

export default Product;
