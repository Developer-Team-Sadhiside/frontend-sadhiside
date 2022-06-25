import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/NavbarNotificationSeller.css';

function Logo() {
  return (
    <div class="button-home">
    <Link to="/" >
        <img src="" alt="" />
    </Link>
    </div>
  );
}

function Search() {
  return (
    <div class="home-search">
    <form class="d-flex" role="search">      
    <input class="form-control me-2 mr-4" type="search" placeholder="Cari disini" aria-label="Search"></input>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#8A8A8A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </form>
</div>  
  );
}

function Login() {
    return (
    <div class='container-button'>
    <a href='/'>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.33325 14.1666L12.4999 9.99992L8.33325 5.83325" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 10H2.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
     
            Masuk</a>
    </div>
    );
}

function List() {
    return (
        <div className='fi-list'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 18H21" stroke="#7126B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 18H3.01" stroke="#7126B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 12H21" stroke="#7126B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 12H3.01" stroke="#7126B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 6H21" stroke="#7126B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6H3.01" stroke="#7126B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>   
    </div>
    );
}

function User() {
    return (
        <div className='fi-user'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </div>
    );
}
function Notif() {
    return (
        <div class="fi-bell"> 
                <a href="#notifikasi"> 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#7126B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#7126B5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                
                <a href="#" class='badge-notif' data-badge=''></a>
                <a href="#" id="notifikasi">
                    <div class="box">
                        <div class='notifikation'>
                            <img src= '/images/Rectangle 33.png'/>
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
                            <img src= '/images/Rectangle 33.png'/>
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
            </div>
            
        );
}

function Bidder() {
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
const NavbarNotificationSeller = () => {
  return (
    <header id="header">
    <nav className='navbar navbar-light pt-4' style={{ height: '' }}>
      <Logo />
      <Search/>
      <List />
      <Notif/>
      <User/> 
    </nav>
    </header>
  );
};

export default NavbarNotificationSeller;

