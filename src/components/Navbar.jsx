import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import { useProductContext } from '../services/productService';

function Logo() {
  return (
    <div className='button-home'>
      <Link to='/'>
        <img src='' alt='' />
      </Link>
    </div>
  );
}

function Search() {
  const productContext = useProductContext();
  return (
    <div className='home-search'>
      <form className='d-flex' role='search'>
        <input
          className='form-control me-2 mr-4'
          placeholder='Cari disini'
          onChange={(e) => {
            productContext?.filterProductBySearch(e.target.value);
          }}
        ></input>
        <img src='/svg/fi_search.svg' />
      </form>
    </div>
  );
}

function Login() {
  return (
    <div className='container-button'>
      <Link to='/login'>
        <img src='/svg/fi_log-in.svg' />
        Masuk
      </Link>
    </div>
  );
}

function List() {
  return (
    <div className='fi-list'>
      <img src='/svg/fi_list.svg' />
    </div>
  );
}

function User() {
  return (
    <div className='fi-user navbar-user-profile-icon'>
      <img src='/svg/fi_user.svg' />
    </div>
  );
}

function Notif() {
  const [hidden, setHidden] = useState(false);
  const productContext = useProductContext();
  useEffect(() => {
    productContext.getProductsOffered();
  }, []);

  return (
    <div className='fi-bell'>
      <span onClick={() => setHidden(!hidden)}>
        <img src='/svg/fi_bell.svg' />
      </span>
      <a href='#' className='badge-notif' data-badge=''></a>
      {hidden && (
        <>
          <div className='notification-box'>
            <div>
              {productContext?.productsOffered.length === 0 ? (
                <>
                  <p>Belum ada notifikasi</p>
                </>
              ) : (
                <>
                  {productContext?.productsOffered.map((value, index) => {
                    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
                    const d = new Date(value.tanggal_pembelian);
                    return (
                      <span key={value.id} onClick={productContext.getDetailProductOffer(value.id)}>
                        <Link to={`/products/seller/bidder/${value.id}`} style={{ textDecoration: 'none' }}>
                          <img src={value.Product.gambar[0]} className='notif-product-image' />
                          <div className='tittle'>
                            <p>Penawaran produk</p>
                          </div>
                          <div className='date'>
                            <p>
                              {d.toLocaleDateString('id-ID', options)}
                              <a href='#' className='badge-notifikasi' data-notifikasi=''></a>
                            </p>
                          </div>
                          <div className='deskription'>
                            <p className='navbar-notification-product-name'>{value.Product.nama_produk}</p>
                            <br />
                            <p>Rp {value.Product.harga_produk.toLocaleString('id-ID')}</p>
                            <br />
                            <p>Ditawar Rp {value.harga_tawar.toLocaleString('id-ID')}</p>
                          </div>
                          <br />
                          {index === productContext?.productsOffered.length - 1 ? (
                            <></>
                          ) : (
                            <>
                              <svg width='328' height='1' viewBox='0 0 328 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <rect width='328' height='1' fill='#E5E5E5' />
                              </svg>
                            </>
                          )}
                        </Link>
                      </span>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
function NavInfoPenawar() {
  return (
    <div className='bidder'>
      <a>Info Penawaran</a>
    </div>
  );
}

function NavInfoAccount() {
  return (
    <div className='account'>
      <a>Lengkapi Info Akun</a>
    </div>
  );
}

const Navbar = () => {
  const [isLogin, setIsLogin] = useState();
  function checkUserLogin() {
    if (!localStorage.getItem('token')) setIsLogin(false);
    else setIsLogin(true);
  }

  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <header id='header'>
      <nav className='navbar navbar-light pt-4' style={{ height: '' }}>
        <Logo />
        <Search />
        {isLogin ? (
          <>
            <List />
            <Notif />
            <User />
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
