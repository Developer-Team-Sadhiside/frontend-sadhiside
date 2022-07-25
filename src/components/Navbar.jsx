import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import { useProductContext } from '../services/productService';
import { Dropdown } from 'react-bootstrap';

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

function List({ iconActive }) {
  return (
    <div className='fi-list'>
      <img src={iconActive ? '/svg/fi_list-active.svg' : '/svg/fi_list-inactive.svg'} />
    </div>
  );
}

function User({ iconActive }) {
  
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('token');

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setIsLoading(true);
  };

  if (!token) {
    return <Navigate to='/login' />;
  }

  return (
    <div className='fi-user navbar-user-profile-icon'>
      <Dropdown className=''>
        <Dropdown.Toggle
          className='btn-toggle'
          style={{
            backgroundColor: 'transparent',
            color: 'black',
            border: 'none',
            zIndex: '1',
          }}
        >
          <img className='img-user' src={iconActive ? '/svg/fi_user-active.svg' : '/svg/fi_user-inactive.svg'} />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href='/dashboard/seller'>Daftar Jual Saya</Dropdown.Item>
          <Dropdown.Item href='/products/savelist'>Daftar Simpan</Dropdown.Item>
          <Dropdown.Item value={isLoading} onClick={handleLogout}>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

function Notif({iconActive}) {
  const [hidden, setHidden] = useState(false);
  const productContext = useProductContext();
  useEffect(() => {
    productContext.getProductsOffered();
    productContext.getBuyerProductsOffered();
    productContext.getBuyerProductsAccept();

  }, []);

  return (
    <div className='fi-bell'>
      <span
        onClick={() => {
          setHidden(!hidden);
          productContext.getProductsOffered();
          productContext.getBuyerProductsOffered();
          productContext.getBuyerProductsAccept();
        }}
      >
        <img src={iconActive ? '/svg/fi_bell-active.svg' : '/svg/fi_bell-inactive.svg'} />
      </span>
      <a href='#' className='badge-notif' data-badge=''></a>
      {hidden && (
        <>
          <div className='notification-box'>
            <div>
              {productContext?.buyerProductsAccept.length === 0 ? (
                <>
                </>
              ) : (
                <>
                  {productContext?.buyerProductsAccept.map((value, index) => {
                    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
                    const d = new Date(value.tanggal_pembelian);
                    return (
                    <div>
                      <img src={value.Product.gambar[0]} className='notif-product-image' />
                      <div className='tittle'>
                        <p>Produk diterima</p>
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
                      <div className='subtittle'>
                        <p>Kamu akan segera dihubungi penjual via WhatsApp</p>
                      </div>
                      <br />
                      {index === productContext?.productsOffered.length - 1 ? (
                        <></>
                      ) : (
                        <>
                          <svg className='mb-3' width='328' height='1' viewBox='0 0 328 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect width='328' height='1' fill='#E5E5E5' />
                          </svg>
                        </>
                      )}
                    </div>
                    );
                  })}
                </>
              )}
            </div>
            <div>
              {productContext?.buyerProductsOffered.length === 0 ? (
                <>
                </>
              ) : (
                <>
                  {productContext?.buyerProductsOffered.map((value, index) => {
                    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
                    const d = new Date(value.tanggal_pembelian);
                    return (
                    <div>
                      <img src={value.Product.gambar[0]} className='notif-product-image' />
                      <div className='tittle'>
                        <p>Produk ditawar</p>
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
                          <svg className='mb-3' width='328' height='1' viewBox='0 0 328 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <rect width='328' height='1' fill='#E5E5E5' />
                          </svg>
                        </>
                      )}
                    </div>
                    );
                  })}
                </>
              )}
            </div>
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
                              <svg className='mb-3' width='328' height='1' viewBox='0 0 328 1' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
  const [iconActive, setIconActive] = useState({ list: false, notif: false, user: false });

  const params = useParams();

  function checkUserLogin() {
    if (!localStorage.getItem('token')) setIsLogin(false);
    else setIsLogin(true);
  }

  function toggleIconActive(iconId) {
    if (iconId == 'list') setIconActive({ list: true, notif: false, user: false });
    else if (iconId == 'notif') setIconActive({ list: false, notif: true, user: false });
    else if (iconId == 'user') setIconActive({ list: false, notif: false, user: true });
  }

  useEffect(() => {
    checkUserLogin();
  }, []);

  return (
    <header id='header'>
      <nav className='navbar navbar-light pt-4' style={{ height: '' }}>
        <Link to='/'>
          <Logo />
        </Link>
        {params?.idBidder ? (
          <>
            <NavInfoPenawar />
          </>
        ) : (
          <>
            <Search />
          </>
        )}
        {isLogin ? (
          <>
            <div
              onClick={() => {
                toggleIconActive('list');
              }}
            >
              <List iconActive={iconActive.list} />
            </div>
            <div
              onClick={() => {
                toggleIconActive('notif');
              }}
            >
              <Notif iconActive={iconActive.notif} />
            </div>
            <div
              onClick={() => {
                toggleIconActive('user');
              }}
            >
              <User iconActive={iconActive.user} />
            </div>
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
