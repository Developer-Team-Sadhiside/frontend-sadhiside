import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './mainlayout/MainLayout';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CreateProductPage from './pages/CreateProductPage';
import  PageProfile  from './pages/PageProfile';
import Bid from './components/bid-info/Bid';
import DashboardSeller from './pages/DashboardSeller';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products/create' element={<CreateProductPage />} />
        <Route path='/profile' element={<PageProfile />} />
        <Route path='/product/bid' element={<Bid />} />
        <Route path='/seller/dashboard' element={<DashboardSeller />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
