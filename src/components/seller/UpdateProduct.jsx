import "../../assets/styles/UpdateProduct.css";
import { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateProduct() {
  const token = localStorage.getItem("token");
  const [deskripsi, setDeskripsi] = useState();
  const [nama_produk, setNama_Produk] = useState("");
  const [harga_produk, setHarga_Produk] = useState("");
  const [kategori, setKategori] = useState("");
  const [gambar, setGambar] = useState("");
  const [preview, setPreview] = useState();
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const { id } = useParams();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setGambar(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleFile = (e) => {
    e.preventDefault();
    setGambar(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const updateProducts = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("gambar", gambar);
    formData.append("nama_produk", nama_produk);
    formData.append("harga_produk", harga_produk);
    formData.append("kategori", kategori);
    formData.append("deskripsi", deskripsi);

    try {
      await axios.put(`http://localhost:8000/api/v1/product/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      });
      console.log("berhasil ngambil");
      navigate("/dashboard/seller");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePreview = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("gambar", gambar);
    formData.append("nama_produk", nama_produk);
    formData.append("harga_produk", harga_produk);
    formData.append("kategori", kategori);
    formData.append("deskripsi", deskripsi);

    try {
      await axios.put(`http://localhost:8000/api/v1/product/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      });
      console.log("berhsail ngambil");
      navigate(`/products/seller/preview/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  useState(async () => {
    const response = await axios.get(`http://localhost:8000/api/v1/getOneProduct/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    setGambar(response.data.produk.gambar);
    setNama_Produk(response.data.produk.nama_produk);
    setHarga_Produk(response.data.produk.harga_produk);
    setDeskripsi(response.data.produk.deskripsi);
    setKategori(response.data.produk.kategori);
    setPreview(response.data.produk.url);
  });

  return (
    <div className="create-product-container container mt-3">
      <div className="row justify-content-sm-center g-0">
        <div
          className="col-sm-1"
          onClick={() => {
            navigate("/dashboard/seller");
          }}
        >
          <img src="/svg/fi_arrow-left.svg" alt="" className="back" />
        </div>
        <div className="col-sm-6">
          <div className="create-product-form">
            <form onSubmit={updateProducts}>
              <label className="create-product-label">Nama Produk</label>
              <input type="text" className="form-control" placeholder="Nama Produk" value={nama_produk} onChange={(e) => setNama_Produk(e.target.value)} />
              <label className="create-product-label">Harga Produk</label>
              <input className="form-control" placeholder={`Rp 0.00`} value={harga_produk} onChange={(e) => setHarga_Produk(e.target.value)} />
              <label className="create-product-label">Kategori</label>
              <select class="form-control" value={kategori} onChange={(e) => setKategori(e.target.value)}>
                <option>Hobi</option>
                <option>Kendaraan</option>
                <option>Baju</option>
                <option>Elektronik</option>
                <option>Kesehatan</option>
              </select>
              <label className="create-product-label">Deskripsi</label>
              <textarea type="text" className="form-control description" placeholder="Contoh: Jalan Ikan Hiu 33" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>

              <label className="create-product-label">Foto Produk</label>
              <div
                className="picture"
                onChange={loadImage}
                onClick={() => {
                  fileInputRef.current.click();
                }}
              >
                {preview ? <img src={preview} alt="" className="image-uploaded" /> : <img src={gambar} alt="" className="image-uploaded" />}
              </div>

              <input type="file" className="form-control" style={{ display: "none" }} ref={fileInputRef} accept="image/*" onChange={handleFile} />

              <div className="row mt-4" type="submit">
                <button className="col preview" onClick={handlePreview} type="submit">
                  Preview
                </button>
                <button className="col terbitkan" type="submit">
                  Terbitkan
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}
