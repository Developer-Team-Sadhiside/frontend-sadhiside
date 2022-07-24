import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/RegisterAsSeller.css";
import capitalCity from "../../assets/dumps/cities.json";

const Profile = () => {
  const [foto, setFoto] = useState();
  const [preview, setPreview] = useState();
  const [nama, setNama] = useState();
  const [kota, setKota] = useState();
  const [alamat, setAlamat] = useState();
  const [no_hp, setNohp] = useState();
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const saveProfil = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("foto", foto);
    formData.append("nama", nama);
    formData.append("kota", kota);
    formData.append("alamat", alamat);
    formData.append("no_hp", no_hp);

    const token = localStorage.getItem("token");

    const domain = 'https://secondhand-shadiside.herokuapp.com'

    try {
      await axios.put(`${domain}/api/v1/users/addProfil`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/dashboard/seller");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (foto) {
      const reader = new FileReader();
      reader.readAsDataURL(foto);
      reader.onload = function (e) {
        setPreview(reader.result);
      };
    } else {
      setPreview(null);
    }
  }, [foto]);

  return (
    <div className="profile-container">
      <div
        className="col-sm"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="/svg/fi_arrow-left.svg" alt="" className="back" style={{ marginTop: "30px", marginLeft: "-50px" }} />
      </div>
      <div
        className="picture"
        onClick={() => {
          fileInputRef.current.click();
        }}
      >
        {preview ? <img src={preview} alt="" className="image-uploaded" /> : <img src="/svg/fi-blank-profile.svg" alt="" className="plus-svg" />}
      </div>
      <input
        type="file"
        className="form-control"
        style={{ display: "none" }}
        ref={fileInputRef}
        accept="image/*"
        onChange={(event) => {
          const file = event.target.files[0];
          if (file) {
            setFoto(file);
          } else {
            setFoto(null);
          }
        }}
      />
      <form>
        <div className="profile-form mt-4">
          <label className="form-label" htmlFor="nama">
            Nama*
          </label>
          <input
            type="text"
            className="form-control ml-4"
            onChange={(event) => {
              setNama(event.target.value);
            }}
            placeholder="Nama"
            id="nama-lengkap"
          />
          <label className="form-label mt-3">Kota*</label>
          <select
            className="form-select option-field"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
            onChange={(event) => {
              setKota(event.target.value);
            }}
            value={kota ? kota : "Surabaya"}
          >
            <option defaultValue="Surabaya">Pilih Kota</option>
            {capitalCity.map((city, index) => (
              <option key={index} value={city.city}>
                {city.city}
              </option>
            ))}
          </select>

          <label
            className="form-label mt-4"
            onChange={(event) => {
              setAlamat(event.target.value);
            }}
            htmlFor="alamat"
          >
            Alamat*
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => {
              setAlamat(event.target.value);
            }}
            style={{ height: "80px", fontSize: "14px" }}
            placeholder="Contoh: Jalan Ikan Hiu 33"
            id="alamat"
          />
          <label className="form-label mt-4" htmlFor="no-hp">
            No Handphone*
          </label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => {
              setNohp(event.target.value);
            }}
            placeholder="contoh: +628123456789"
            id="no_hp"
          />
        </div>
        <div className="justify-content-center mb-5">
          <input onClick={saveProfil} type="submit" className="btn btn-simpan" value="SImpan" />
        </div>
      </form>
    </div>
  );
};

export default Profile;
