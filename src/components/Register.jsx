import '../assets/styles/Register.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [inputtext, setinputtext] = useState({
    password: '',
  });

  const [eye, seteye] = useState(true);
  const [password, setpassword] = useState('password');
  const [type, settype] = useState(false);

  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinputtext((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      };
    });
  };

  const Eye = () => {
    if (password == 'password') {
      setpassword('text');
      seteye(false);
      settype(true);
    } else {
      setpassword('password');
      seteye(true);
      settype(false);
    }
  };
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
                      />
                      <label className='form-label' htmlFor='email'>
                        Email
                      </label>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Contoh: johndoe@gmail.com'
                        id='email'
                      />
                      <label className='form-label' htmlFor='password'>
                        Password
                      </label>
                      <div className='form-group'>
                        <input
                          type={password}
                          className='form-control'
                          placeholder='Masukkan password'
                          value={inputtext.password}
                          onChange={inputEvent}
                          name='password'
                        />
                        <i
                          onClick={Eye}
                          className={`bi ${eye ? 'bi-eye-slash' : 'bi-eye'}`}
                        ></i>
                      </div>

                      <input
                        type='submit'
                        className='form-control register-button btn'
                        value='Daftar'
                      />
                      <p className='text-center'>
                        Sudah punya akun?{' '}
                        <Link to='/users/login' className='link-already-registered'>
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
};

export default Register;
