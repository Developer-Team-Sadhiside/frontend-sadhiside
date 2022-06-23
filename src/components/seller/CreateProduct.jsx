import '../../assets/styles/CreateProduct.css';
import { useRef, useState, useEffect } from 'react';

export default function CreateProduct() {
  const [price, setPrice] = useState();

  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = function (e) {
        setPreview(reader.result);
      };
    } else {
      setPreview(null);
    }
  }, [image]);

  function restrictAlphabets(input) {
    const value = input.replace(/\D/g, '');
    setPrice(value);
  }

  return (
    <div className='create-product-container container'>
      <div className='row justify-content-sm-center'>
        <div className='col-sm-1'>
          <img
            src='/svg/fi_arrow-left.svg'
            alt=''
            className="back"
          />
        </div>
        <div className='col-md-6'>
          <form className='create-product-form'>
            <label className='create-product-label'>Nama Produk</label>
            <input
              type='text'
              className='form-control'
              placeholder='Nama Produk'
            />
            <label className='create-product-label'>Harga Produk</label>
            <input
              className='form-control'
              placeholder={`Rp 0.00`}
              value={price}
              onChange={(event) => {
                restrictAlphabets(event.target.value);
              }}
            />
            <label className='create-product-label'>Kategori</label>
            <select class='form-control'>
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
            ></textarea>

            <label className='create-product-label'>Foto Produk</label>
            <div
              className='picture'
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
                const file = event.target.files[0];
                if (file) {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />

            <div className='row mt-4'>
              <button
                className='col preview'
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                Preview
              </button>
              <button
                className='col terbitkan'
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                Terbitkan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
