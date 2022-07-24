import React, { useState, useEffect } from 'react';
import '../../assets/styles/CategorySeller.css';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import axios from 'axios';
import { useProductContext } from '../../services/productService';

const CategorySeller = () => {
  const token = localStorage.getItem('token');
  const [all, setAll] = useState(true);
  const [like, setLike] = useState(false);
  const [sell, setSell] = useState(false);
  const [productsSeller, setProductsSeller] = useState([]);
  const [productsSellerInterest, setProductsSellerInterest] = useState([]);
  const [productsSellerSold, setProductsSellerSold] = useState([]);

  const navigate = useNavigate();
  const [buttonGroup, setButtonGroup] = useState('Semua');

  const colorActive = {
    color: '#7126B5',
  };
  const colorInactive = {
    color: 'black',
  };

  const handleAll = (e) => {
    e.preventDefault();
    setAll(true);
    setLike(false);
    setSell(false);
  };

  const handleLike = (e) => {
    e.preventDefault();
    setAll(false);
    setLike(true);
    setSell(false);
  };

  const handleSell = (e) => {
    e.preventDefault();
    setAll(false);
    setLike(false);
    setSell(true);
  };

  useEffect(() => {
    getProductsSeller();
  }, []);

  useEffect(() => {
    getProductsSellerInterest();
  }, []);

  useEffect(() => {
    getProductsSellerSold();
  }, []);

  const domain = 'https://secondhand-shadiside.herokuapp.com';

  const getProductsSeller = async () => {
    const response = await axios.get(`${domain}/api/v1/listProducts/seller`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    setProductsSeller(response.data.produk);
  };

  const getProductsSellerInterest = async () => {
    const response = await axios.get(`${domain}/api/v1/listProducts/seller/interested`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    setProductsSellerInterest(response.data.produk);
  };

  const getProductsSellerSold = async () => {
    const response = await axios.get(`${domain}/api/v1/listProducts/seller/sold`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    setProductsSellerSold(response.data.produk);
  };

  const productContext = useProductContext();

  return (
    <div className='container' style={{ marginTop: '90px' }}>
      <div className='row'>
        <div className='col-3 p-0 py-2'>
          <div className='row'>
            <div className='category-category-product-list'>
              <ToggleButtonGroup
                type='radio'
                name='category-mobile-version'
                value={buttonGroup}
                className='category-button-group-custom'
                onChange={(event) => {
                  setButtonGroup(event);
                }}
              >
                <h6 className='mb-3 category-text-category'>Kategori</h6>
                <div id='radio-button-1' value={'Semua Produk'} onClick={handleAll} className='category-btn-group-category category-bb-category'>
                  <div className='d-flex justify-content-center align-items-center' style={all ? colorActive : colorInactive}>
                    <i className='me-2 fa-solid fa-box'></i>
                    <p className='m-0'>Semua Produk</p>
                  </div>
                  <i className='fa-solid fa-angle-right' style={all ? colorActive : colorInactive}></i>
                </div>
                <div id='radio-button-2' value={'Diminati'} onClick={handleLike} className='category-btn-group-category category-bb-category'>
                  <div className='d-flex justify-content-center align-items-center' style={like ? colorActive : colorInactive}>
                    <i className='me-2 fa-solid fa-heart'></i>
                    <p className='m-0'>Diminati</p>
                  </div>
                  <i className='fa-solid fa-angle-right' style={like ? colorActive : colorInactive}></i>
                </div>
                <div id='radio-button-3' value={'Terjual'} onClick={handleSell} className='category-btn-group-category'>
                  <div className='d-flex justify-content-center align-items-center' style={sell ? colorActive : colorInactive}>
                    <i className='me-2 fa-solid fa-dollar-sign'></i>
                    <p className='m-0'>Terjual</p>
                  </div>
                  <i className='fa-solid fa-angle-right' style={sell ? colorActive : colorInactive}></i>
                </div>
              </ToggleButtonGroup>
            </div>
          </div>
        </div>
        <div className='col-9 p-0 py-2 px-5'>
          <div className='row justify-content-start row-cols-lg-4'>
            {all && (
              <>
                <div className='col'>
                  <div
                    className='category-add-product-box text-center'
                    onClick={() => {
                      navigate('/dashboard/seller/createproduct');
                    }}
                  >
                    <img src='/images/Plus_icon.png' style={{ width: '30px' }} className='mb-3' alt='' />
                    <p>Semua Produk</p>
                  </div>
                </div>
                {productsSeller.map((productsSeller) => {
                  return (
                    <div className='category-seller-card-product col-sm-2'>
                      <Link to={`/products/seller/update/${productsSeller.id}`} style={{ textDecoration: 'none' }}>
                        <div className='img-wrapper'>
                          <img className='card-img-top' src={productsSeller.gambar} />
                        </div>
                        <div>
                          <h5 className='category-seller-product-title'>{productsSeller.nama_produk}</h5>
                          <p className='category-seller-product-category'>{productsSeller.kategori}</p>
                        </div>
                      </Link>
                      <div className='row'>
                        <Link to={`/products/seller/update/${productsSeller.id}`} style={{ textDecoration: 'none' }} className='col-8'>
                          <p className='category-seller-price-product'>Rp. {productsSeller.harga_produk.toLocaleString('id-ID')}</p>
                        </Link>
                        <span className='col product-delete-button'>
                          <img
                            onClick={() => {
                              productContext.deleteProduct(productsSeller.id);
                            }}
                            src='/svg/fi_trash-2.svg'
                            alt='Like icon'
                          />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
            {/* get product by like */}
            {like && (
              <>
                <div className='category-card-list-product '>
                  <div>{productsSellerInterest.data.length == 0 && <img src='/svg/empty-product-illustration.svg' className='image-like' alt='' />}</div>
                  {productsSellerInterest.data.length > 0 &&
                    productsSellerInterest.data.map((productsSellerInterest) => {
                      return (
                        <div
                          className='category-card-product-sold'
                          onClick={() => {
                            navigate(`/products/seller/update/${productsSellerInterest.id}`);
                          }}
                          key={productsSellerInterest.id}
                        >
                          <div className='category-img-wrapper'>
                            <img className='category-card-img-top-seller' src={productsSellerInterest.gambar} />
                            <h5 className='category-product-title-seller'>{productsSellerInterest.nama_produk}</h5>
                            <p className='category-product-category-seller'>{productsSellerInterest.kategori}</p>
                            <p className='category-price-product-seller'>Rp {productsSellerInterest.harga_produk}</p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            )}
            {/* end get product by like */}

            {/* get product by sold */}
            {sell && (
              <div className='category-card-list-product'>
                <div>{productsSellerSold.data.length == 0 && <img src='/svg/Frame 34.svg' className='image-like' alt='' />}</div>
                {productsSellerSold.data.length > 0 &&
                  productsSellerSold.data.map((productsSellerSold) => {
                    console.log(productsSellerSold);
                    return (
                      <div
                        className='category-card-product-sold'
                        onClick={() => {
                          navigate(`/products/seller/update/${productsSellerSold.id}`);
                        }}
                        key={productsSellerSold.id}
                      >
                        <div className='category-img-wrapper'>
                          <img className='category-card-img-top-seller' src={productsSellerSold.gambar} />
                          <h5 className='category-product-title-seller'>{productsSellerSold.nama_produk}</h5>
                          <p className='category-product-category-seller'>{productsSellerSold.kategori}</p>
                          <p className='category-price-product-seller'>Rp {productsSellerSold.harga_produk}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
            {/* end get product by sold */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySeller;
