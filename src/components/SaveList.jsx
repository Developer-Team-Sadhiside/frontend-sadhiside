import React, {useState} from 'react';
import '../assets/styles/SaveList.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const SaveList = () => {
  const token = localStorage.getItem("token");
  const [likedProducts, setLikedProducts] =  useState()

  async function getLikedProducts (){
    let result = await fetch("http://localhost:8000/api/v1/listProducts/buyer/liked", {
      method : "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
      result = await result.json()
      setLikedProducts(result?.produk?.data)
    };
    console.log(likedProducts); 

  useEffect(() => {
   getLikedProducts()
  }, []);

  return (
    <div>
      <div className='container'>
          <div className="col-8" style={{ marginLeft:"220px" }}>
            <Link to='/'>
            <img src='/svg/fi_arrow-left.svg' alt='' className='back' />
            </Link>
        <div className='row ms-5 px-5 py-1'>
          {likedProducts?.map((value) => {
            return (
            <div className='product-simpan'>
              <div className='img-wrapper'>
                <img className='card-img-top-simpan' src={value.gambar[0]} />
              </div>
              <div>
                <h5 className='product-title-simpan ms-3'>{value.nama_produk}</h5>
                <p className='product-category-simpan ms-3'>{value.kategori}</p>
              </div>
              <div className='row'>
                <Link to="" style={{ textDecoration: 'none' }} className='col-9'>
                <p className='price-product ms-3'>Rp. {value.harga_produk}</p>
                </Link>
                <span>
                  <img
                  className='like-button'
                  src='/svg/fi_like.svg'
                  alt='Like icon'
                  />
                </span>
              </div>
            </div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveList;
