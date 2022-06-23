import React, { useState, useEffect, useRef } from 'react';
import '../../assets/styles/RegisterAsSeller.css';

const Profile = () => {
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

  return (
    <div className='profile-container'>
      <div className='col-sm'>
        <img
          src='/svg/fi_arrow-left.svg'
          alt=''
          className='back'
          style={{ marginTop: '30px', marginLeft: '-50px' }}
        />
      </div>
      <div
        className='picture'
        onClick={() => {
          fileInputRef.current.click();
        }}
      >
        {preview ? (
          <img src={preview} alt='' className='image-uploaded' />
        ) : (
          <img src='/svg/profile-kosong.svg' alt='' className='plus-svg' />
        )}
      </div>
      <input
        type='file'
        className='form-control'
        style={{ display: 'none' }}
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
      <form>
        <div className='profile-form mt-4'>
          <label className='form-label' htmlFor='nama'>
            Nama*
          </label>
          <input
            type='text'
            className='form-control'
            placeholder='Nama'
            id='nama-lengkap'
          />
          <label className='form-label mt-4' htmlFor='kota'>
            Kota*
          </label>
          <select class='form-select' id='inlineFormSelectPref'>
            <option selected>Pilih Kota</option>
            <option value='1'>Surabaya</option>
            <option value='2'>Yogyakarta</option>
            <option value='3'>Jakarta</option>
          </select>
          <label className='form-label mt-4' htmlFor='alamat'>
            Alamat*
          </label>
          <input
            type='text'
            className='form-control'
            style={{ height: '80px', fontSize: '14px' }}
            placeholder='Contoh: Jalan Ikan Hiu 33'
            id='alamat'
          />
          <label className='form-label mt-4' htmlFor='no-hp'>
            No Handphone*
          </label>
          <input
            type='text'
            className='form-control'
            placeholder='contoh: +628123456789'
            id='no-hp'
          />
        </div>
        <div className='justify-content-center mb-5'>
          <button
            type='button'
            className='btn btn-simpan'
            style={{ color: '#FFFFFF' }}
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
