import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateProductPage from "./pages/CreateProductPage";
import RegisterAsSellerPage from "./pages/RegisterAsSellerPage";
import ProductPreviewPage from "./pages/ProductPreviewPage";
import BidderPage from "./pages/BidderPage";
import DashboardSellerPage from "./pages/DashboardSellerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/seller" element={<RegisterAsSellerPage />} />

        <Route path="/products/create" element={<CreateProductPage />} />
        <Route path="/products/preview/:id" element={<ProductPreviewPage />} />
        <Route path="/products/create/preview" element={<ProductPreviewPage />} />
        <Route path="/products/seller/bidder" element={<BidderPage />} />
        <Route path="/dashboard/seller" element={<DashboardSellerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
