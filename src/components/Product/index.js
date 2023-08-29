import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data } from '../../data'
import ProductCard from './ProductCard';
import { GET_PRODUCT } from '../../redux/ActionTypes';

const Product = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    useEffect(() => {
        dispatch({type: GET_PRODUCT, payload: data});
    }, []);
    return (
        
         <div class=" flex justify-center flex-wrap p-10">
           {product.map((el) => <ProductCard element={el}/>)}
            
       </div>
    );
};

export default Product;