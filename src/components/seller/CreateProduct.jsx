import '../../assets/styles/CreateProduct.css';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateProduct() {
  const token = localStorage.getItem('token');
  const [deskripsi, setDeskripsi] = useState();
  const [nama_produk, setNama_Produk] = useState("");
  const [harga_produk, setHarga_Produk] = useState("");
  const [kategori, setKategori] = useState("");
  const [gambar, setGambar] = useState("");
  const [preview, setPreview] = useState();
  const navigate = useNavigate();
  const fileInputRef = useRef();


  const loadImage = (e) => {
    const image = e.target.files[0];
    setGambar(image);
    setPreview(URL.createObjectURL(image));
  };

  const createProducts = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("gambar", gambar);
    formData.append("nama_produk", nama_produk);
    formData.append("harga_produk", harga_produk);
    formData.append("kategori", kategori);
    formData.append("deskripsi", deskripsi);
    try {
      await axios.post("http://localhost:8000/api/v1/addProduct", formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: 'Bearer ' + token,
        },
      });
      navigate("/dashboard/seller");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (gambar) {
      const reader = new FileReader();
      reader.readAsDataURL(gambar);
      reader.onload = function (e) {
        setPreview(reader.result);
      };
    } else {
      setPreview(null);
    }
  }, [gambar]);


  return (
    <div className='create-product-container container mt-3'>
      <div className='row justify-content-sm-center g-0'>
        <div className='col-sm-1'>
          <img
            src='/svg/fi_arrow-left.svg'
            alt=''
            className="back"
          />
        </div>
        <div className='col-sm-6'>
          <div className='create-product-form'>
            <form onSubmit={createProducts}>
              <label className='create-product-label'>Nama Produk</label>
              <input
                type='text'
                className='form-control'
                placeholder='Nama Produk'
                value={nama_produk}
                onChange={(e) => setNama_Produk(e.target.value)}
              />
              <label className='create-product-label'>Harga Produk</label>
              <input
                className='form-control'
                placeholder={`Rp 0.00`}
                value={harga_produk}
                onChange={(e) => setHarga_Produk(e.target.value)}
              />
              <label className='create-product-label'>Kategori</label>
              <select class='form-control' value={kategori} onChange={(e) => setKategori(e.target.value)}>
                <option>Hobi</option>
                <option>Kendaraan</option>
                <option>Baju</option>
                <option>Elektronik</option>
                <option>Kesehatan</option>
              </select>
              <label className='create-product-label'>Deskripsi</label>
              <textarea
                type='text'
                className='form-control description'
                placeholder='Contoh: Jalan Ikan Hiu 33'
                value={deskripsi}
                onChange= {(e) => setDeskripsi(e.target.value)}
              ></textarea>

              <label className='create-product-label'>Foto Produk</label>
              <div
                className='picture'
                onChange={loadImage}
                onClick={() => {
                  fileInputRef.current.click();
                }}
              >
                {preview ? (
                  <img src={preview} alt='' className='image-uploaded' />
                ) : (
                  <img src='/svg/fi_plus.svg' alt='' className='plus-svg' />
                )}
              </div>

              <input
                type='file'
                className='form-control'
                style={{ display: 'none'}}
                ref={fileInputRef}
                accept='image/*'
                onChange={(event) => {
                  const gambar = event.target.files[0];
                  if (gambar) {
                    setGambar(gambar);
                  } else {
                    setGambar(null);
                  }
                }}
              />
                <div className='row mt-4'>
                  <button className='col preview'>Preview</button>
                  <button className='col terbitkan' type='submit'>Terbitkan</button>
                </div>
            </form>
          </div>
        </div>
        <div className='col-sm-1'></div>
      </div>
    </div>
  );
}
