import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './mainlayout/MainLayout';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Navbar  from './components/navbar/navbar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
