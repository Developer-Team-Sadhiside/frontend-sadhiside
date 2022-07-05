import React from "react";
import "../assets/styles/ToastNotification.css";

function ToastNotification() {
  return (
    <div>
      <div class="alert alert-success alert-dismissible fade show text-white" role="alert">
        Produk Berhasil ditambahkan
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  );
}

export default ToastNotification;
