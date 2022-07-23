import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateProductPage from "./pages/CreateProductPage";
import RegisterAsSellerPage from "./pages/RegisterAsSellerPage";
import ProductPreviewPage from "./pages/ProductPreviewPage";
import BidderPage from "./pages/BidderPage";
import DashboardSellerPage from "./pages/DashboardSellerPage";
import UpdateProductPage from "./pages/UpdateProductPage";
import EditProfileSellerPage from "./pages/EditProfileSellerPage";
import SaveListPage from "./pages/SaveListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/addprofil" element={<RegisterAsSellerPage />} />
        <Route path="/products/seller/update/:id" element={<UpdateProductPage />} />
        <Route path="/dashboard/seller/createproduct" element={<CreateProductPage />} />
        <Route path="/products/seller/preview/:id" element={<ProductPreviewPage />} />
        <Route path="/products/preview/:id" element={<ProductPreviewPage />} />
        <Route path="/products/seller/bidder/:idBidder" element={<BidderPage />} />
        <Route path="/products/savelist" element={<SaveListPage />} />
        <Route path="/dashboard/seller/updateprofile" element={<RegisterAsSellerPage />} />
        <Route path="/dashboard/seller/editprofile" element={<EditProfileSellerPage />} />

        <Route path="/dashboard/seller" element={<DashboardSellerPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
