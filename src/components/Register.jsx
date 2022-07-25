import '../assets/styles/Register.css';
import { Link } from 'react-router-dom';
import { useRegisterContext } from '../services/registerService';
import { useState } from 'react';

export default function Register() {
  const productContext = useRegisterContext();
  return (
    <section className='register container-fluid ps-md-0'>
      <div className='row g-0'>
        <div className='col-md-4 col-lg-6 bg-image'></div>
        <div className='col-md-8 col-lg-6'>
          <div className='register d-flex align-items-center py-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-9 col-lg-8 mx-auto'>
                  <div className='header-register'>
                    <h1>Daftar</h1>
                    {productContext.toggleNotification && (
                      <span
                        onClick={() => {
                          productContext.hideNotification();
                        }}
                      >
                        <div class='alert alert-danger' role='alert'>
                          {productContext.notificationMessage}
                        </div>
                      </span>
                    )}
                  </div>
                  <form>
                    <div className='register-form'>
                      <label className='form-label' htmlFor='nama-lengkap'>
                        Nama
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Nama Lengkap'
                        id='nama-lengkap'
                        onChange={(event) => {
                          productContext.setName(event.target.value);
                        }}
                      />
                      <label className='form-label' htmlFor='email'>
                        Email
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Contoh: johndoe@gmail.com'
                        id='email'
                        onChange={(event) => {
                          productContext.setEmail(event.target.value);
                        }}
                      />
                      <label className='form-label' htmlFor='password'>
                        Password
                      </label>
                      <div className='form-group'>
                        <input
                          type={productContext.passwordType}
                          className='form-control'
                          placeholder='Masukkan password'
                          name='password'
                          onChange={(event) => {
                            productContext.setPassword(event.target.value);
                          }}
                        />
                        <span onClick={productContext.changeInputPasswordType}>
                          {productContext.eye ? (
                            <img src='/svg/fi_eye-off.svg' alt='Eye Icon' className='register-eye-icon' />
                          ) : (
                            <img src='/svg/fi_eye.svg' alt='Eye Icon' className='register-eye-icon' />
                          )}
                        </span>
                      </div>
                      <input
                        onClick={(event) => {
                          productContext.setLoading(true);
                          productContext.postRegister(event);
                        }}
                        type='submit'
                        className='form-control register-button'
                        value={productContext.loading ? 'Loading...' : 'Daftar'}
                      />
                      <p className='text-center'>
                        Sudah punya akun?{' '}
                        <Link to='/login' className='link-already-registered'>
                          Masuk di sini
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
