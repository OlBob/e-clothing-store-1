import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const Hats = () => {
  return <h1>There are Hats somewhere</h1>
}

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='shop/hats' element={<Hats />} />
    </Routes>
  );
}

export default App;
