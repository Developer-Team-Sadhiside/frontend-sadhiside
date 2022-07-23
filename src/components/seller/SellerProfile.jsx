import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/SellerProfile.css";
import { useState } from "react";
import axios from "axios";

const SellerProfile = () => {
  const token = localStorage.getItem("token");
  const [nama, setNama] = useState("");
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();
  const [kota, setKota] = useState("");
  useState(async () => {
    const response = await axios.get("http://localhost:8000/api/v1/users/whoAmI", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setNama(response.data.user.nama);
    setKota(response.data.user.kota);
    setFoto(response.data.user.foto);
  });
  return (
    <div>
      <div className="container">
        <div className="row justifty-content-center">
          <div className="col-lg-10">
            <div className="daftar_jual fw-bold mt-5">Daftar Jual Saya</div>
            <div className="rounded-5">
              <div className="profile_seller">
                <div className="user-card-image-preview col-sm-3">
                  <img src={foto} alt="User Image" className="col-sm-3 user-card-image-size-preview profile_image" />
                </div>
                <div className="col-lg-10">
                  <div className="text_penjual fw-bold mt-3">{nama}</div>
                  <div className="text_penjual">{kota}</div>
                  <div className="profile_btn">
                      <button
                        type="submit"
                        className="btn_edit"
                        onClick={() => {
                          navigate("/dashboard/seller/editprofile");
                        }}
                      >
                        Edit
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
