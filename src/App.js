import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreateProductPage from './pages/CreateProductPage';
import RegisterAsSellerPage from './pages/RegisterAsSellerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/users/register' element={<RegisterPage />} />
        <Route path='/users/login' element={<LoginPage />} />
        <Route path='/users/products/create' element={<CreateProductPage />} />
        <Route path='/users/register/seller' element={<RegisterAsSellerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
