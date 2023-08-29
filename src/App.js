import React from 'react';
import Header from './components/Header/Header';
import Product from './components/Product'
import Favorites from './components/Favorites'
import Basket from './components/Basket'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/favorite' element={<Favorites/>}/>
      </Routes>
     
      
    </div>
  );
};

export default App;