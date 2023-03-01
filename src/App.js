import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='shop' element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
