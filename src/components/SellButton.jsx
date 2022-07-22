import "../assets/styles/SellButton.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

export default function SellButton() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [kota, setKota] = useState("");
  const [alamat, setAlamat] = useState("");
  useState(async () => {
    const response = await axios.get("http://localhost:8000/api/v1/users/whoAmI", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setKota(response.data.user.kota);
    setAlamat(response.data.user.alamat);
  });

  function isLogin() {
    if (!localStorage.getItem(token)) {
      navigate("/login");
    }
  }

  console.log(kota, alamat);
  return (
    <a href="" className="start-sell-link">
      <button
        className="fixed-bottom container start-sell-link-button"
        onClick={() => {
          if (token === null) {
            navigate("/login");
          } else if (kota === null || alamat === null) {
            navigate("/addprofil");
          } else {
            navigate("/dashboard/seller/createproduct");
          }
        }}
      >
        <img src="/svg/fi_plus-white.svg" alt="Plus Icon" /> Jual
      </button>
    </a>
  );
}
