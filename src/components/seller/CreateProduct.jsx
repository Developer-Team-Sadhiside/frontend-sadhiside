import '../../assets/styles/CreateProduct.css';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreateProduct() {
  const [price, setPrice] = useState();
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState();
  // const [preview, setPreview] = useState();
  const [preview2, setPreview2] = useState();
  const navigate = useNavigate();
  const fileInputRef = useRef();


  const loadImage = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setPreview2(URL.createObjectURL(image));
  }

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("desc", desc);
    try {
      await axios.post("http://localhost8000/api/v1/addProduct", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/products/create/preview");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = function (e) {
        setPreview2(reader.result);
      };
    } else {
      setPreview2(null);
    }
  }, [image]);

  // function restrictAlphabets(input) {
  //   const value = input.replace(/\D/g, '');
  //   setPrice(value);
  // }

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
            <form onSubmit={saveProduct}>
              <label className='create-product-label'>Nama Produk</label>
              <input
                type='text'
                className='form-control'
                placeholder='Nama Produk'
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <label className='create-product-label'>Harga Produk</label>
              <input
                className='form-control'
                placeholder={`Rp 0.00`}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label className='create-product-label'>Kategori</label>
              <select class='form-control' value={category} onChange={(e) => setCategory(e.target.value)}>
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
                value={desc}
                onChange= {(e) => setDesc(e.target.value)}
              ></textarea>

              <label className='create-product-label'>Foto Produk</label>
              <div
                className='picture'
                onChange={loadImage}
                onClick={() => {
                  fileInputRef.current.click();
                }}
              >
                {preview2 ? (
                  <img src={preview2} alt='' className='image-uploaded' />
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
                  const file = event.target.files[0];
                  if (file) {
                    setImage(file);
                  } else {
                    setImage(null);
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
