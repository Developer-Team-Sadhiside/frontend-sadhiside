import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './mainlayout/MainLayout';
import Login from './components/login/Login';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MainLayout />}/>
          <Route path="/login" element ={<Login />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
