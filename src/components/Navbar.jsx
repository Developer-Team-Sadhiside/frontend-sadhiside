import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <header id='header'>
      <nav className='navbar navbar-expand-sm pt-4'>
        <div className='container'>
          <div class='button-home'>
            <Link to='/'>
              <img src='' alt='' />
            </Link>
          </div>

          <div class='home-search'>
            <form class='d-flex' role='search'>
              <input
                class='form-control me-2 mr-4'
                type='search'
                placeholder='Cari disini'
                aria-label='Search'
              ></input>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
                  stroke='#8A8A8A'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M20.9999 20.9999L16.6499 16.6499'
                  stroke='#8A8A8A'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </form>
          </div>
        </div>
        <div class='container-button'>
          <Link to='/users/login'>
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.33325 14.1666L12.4999 9.99992L8.33325 5.83325'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M12.5 10H2.5'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            Masuk
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
