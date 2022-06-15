import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './mainlayout/MainLayout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element ={<MainLayout />}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App
