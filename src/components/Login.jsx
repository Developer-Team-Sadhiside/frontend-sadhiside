import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Login.css';

const Login = () => {
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
    <div className='d-lg-flex half'>
      <div
        className='bg order-1'
        style={{ backgroundImage: 'url("/images/secondhand.png")' }}
      />
      <div className='contents order-2 order-md-1'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-7'>
              <div className='mb-4'>
                <h3 className='title-login'>Masuk</h3>
              </div>
              <form>
                <div className='form-group first'>
                  <label>email</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Masukan Email'
                  />
                </div>
                <div className='form-group last mt-5'>
                  <label>Password</label>
                  <input
                    type={password}
                    className='form-control'
                    placeholder='Enter your password'
                    value={inputtext.password}
                    onChange={inputEvent}
                    name='password'
                  />
                  <i
                    onClick={Eye}
                    className={`bi ${eye ? 'bi bi-eye-slash' : 'bi bi-eye'}`}
                  ></i>
                </div>

                <div className='d-flex mb-5 align-items-center mt-5'>
                  <label className='control control--checkbox mb-0'>
                    <span className='caption'>Remember me</span>
                    <input type='checkbox' />
                    <div className='control__indicator' />
                  </label>
                  <span className='ml-auto'>
                    <a href='#' className='forgot-pass'>
                      Forgot Password
                    </a>
                  </span>
                </div>
                <button type='submit' className='btn btn-block btn-primary'>
                  Masuk
                </button>
                <div className='login-form mt-4 ms-5'>
                  <p className='text-center'>
                    Belum Punya Akun?{' '}
                    <Link to='/users/register' className='link-already-login'>
                      Daftar di sini
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
