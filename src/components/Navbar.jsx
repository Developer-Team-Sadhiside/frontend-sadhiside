import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

function Logo() {
  return (
    <div className='button-home'>
    <Link to="/" >
        <img src="" alt="" />
    </Link>
    </div>
  );
}

function Search() {
  return (
    <div className='home-search'>
    <form className='d-flex' role="search">      
    <input className='form-control me-2 mr-4' type="search" placeholder="Cari disini" aria-label="Search"></input>
        <img src='/svg/fi_search.svg'/>
    </form>
</div>  
  );
}

function Login() {
    return (
    <div class='container-button'>
    <a href='/'>
    <img src='/svg/fi_log-in.svg'/>
        Masuk</a>
    </div>
    );
}

function List() {
    return (
        <div className='fi-list'>
         <img src='/svg/fi_list.svg'/>
    </div>
    );
}

function User() {
    return (
        <div className='fi-user'>
                 <img src='/svg/fi_user.svg'/>

            </div>
    );
}
function Notif() {
    const [hidden, setHidden] = useState(false);

    return (
        <div class="fi-bell"> 
                <a onClick={() => setHidden(!hidden)}>
                   <img src='/svg/fi_bell.svg' />
                </a>
                <a href="#" class='badge-notif' data-badge=''></a>
                {hidden && 
                <a href="#" id="">
                <div class="box">
                    <div class='notifikation'>
                        <img src= '/images/Rectangle_33.png'/>
                        <div class='tittle'>
                            <p>Penawaran produk</p>
                        </div>   
                        <div class='date'>
                            <p>21 Jun, 14:00  <a href="#" class='badge-notifikasi' data-notifikasi=''></a></p>
                        </div>    
                        <div class='deskription'>
                            <a>Jam tangan Casio</a><br />
                            <a>Rp 250.000</a><br />
                            <a>Ditawar Rp 200.000</a> 
                        </div> 
                    </div>
                    <br />
                        <svg width="328" height="1" viewBox="0 0 328 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="328" height="1" fill="#E5E5E5"/>
                        </svg>
                    <div class='notifikasi'>
                        <img src= '/images/Rectangle_33.png'/>
                        <div class='tittle'>
                            <p>Berhasil diterbitkan</p>
                        </div>   
                        <div class='date'>
                            <p>21 Jun, 14:00<a href="#" class='badge-notifikasi' data-notifikasi=''></a></p>
                            
                        </div>    
                        <div class='deskription'>
                            <a>Jam tangan Casio</a><br />
                            <a>Rp 250.000</a>
                        </div> 
                    </div>
                    

                </div>
                
            </a>
                }
                
            </div>
            
        );
  }
function Infopenawar() {
    return (
        <div className="bidder">
            <a>Info Penawaran</a>
        </div>
    );
}

function Account(){
    return (
        <div className="account">
        <a>Lengkapi Info Akun</a>
    </div>

    )
}
const Navbar= () => {
  return (
    <header id="header">
    <nav className='navbar navbar-light pt-4' style={{ height: '' }}>
      <Logo />
      <Search/>
      <Login />
      
    </nav>
    </header>
  );
};

export default Navbar;

