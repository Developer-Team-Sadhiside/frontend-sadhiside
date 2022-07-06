import React from "react";
import "../assets/styles/ToastNotification.css";

function ToastNotification() {
  return (
    <div className="fixed-top container">
      <div className="alert alert-success alert-dismissible fade show text-white col-md-6 offset-md-3 align-self-center" role="alert">
        Produk Berhasil ditambahkan
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  );
}

export default ToastNotification;
