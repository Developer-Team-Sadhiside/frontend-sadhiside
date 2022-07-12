import React, { Fragment, useState } from 'react';
import {toast} from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css';
import axios from 'axios';

const Login = () => {
    const [inputtext, setinputtext] = useState({
      password: '',
    });

    // Eye Flash Icon
    const [eye, seteye] = useState(true);
    const [password, setPassword] = useState('password');
    const [type, settype] = useState(false);

    // Email and password
    const [email, setEmail] = useState('');
    const [password2, setPassword2] = useState('');

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const submitLogin = async (event) => {
      event.preventDefault();
      const data = {
        email: email,
        password: password2
      }
      
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/users/login", data
        )
        localStorage.setItem('token', response.data.token)
        navigate("/")
      } catch (error) {
        // toast.error('Bad User Credentials',{
        //   position: "top-center",
        // })
        setError(error.response.data.message);
      }
    }

    const onChangeEmail = (e) => {
      const value = e.target.value
      setEmail(value)
      setError('')
    }

    const onChangePassword = (e) => {
      const value = e.target.value
      setPassword2(value)
      setError('')
    }

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
        setPassword('text');
        seteye(false);
        settype(true);
      } else {
        setPassword('password');
        seteye(true);
        settype(false);
      }
    };
    return (

<Fragment>
  <div className='d-lg-flex half'>
    <div className='bg order-1' style={{ backgroundImage: 'url("/images/secondhand.png")' }} />
    <div className='contents order-2 order-md-1'>
      <div className='container'>
        <div className='row align-items-center justify-content-center'>
          <div className='col-md-7'>
            <div className='mb-4'>
              <h3 className='title-login'>Masuk</h3>
            </div>
            <form>
              {
              error && (
              <div className="alert alert-danger">
                <p>{error}</p>
              </div>
              )
              }
              <div className='form-group first'>
                <label>email</label>
                <input type='text' className='form-control' placeholder='Masukan Email' value={email}
                  onChange={onChangeEmail} />
              </div>
              <div className='form-group last mt-5'>
                <label>Password</label>
                <input type={password} className='form-control' placeholder='Enter your password' name='password'
                  value={password2} onChange={onChangePassword} />
                <i onClick={Eye} className={`bi ${eye ? 'bi bi-eye-slash' : 'bi bi-eye' }`}></i>
              </div>
              <button type='submit' onClick={submitLogin} className='btn btn-block'>
                Masuk
              </button>
              <div className='login-form mt-4 ms-5'>
                <p className='text-center'>
                  Belum Punya Akun?{' '}
                  <Link to='/register' className='link-already-login'>
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
  </Fragment>
);
};

export default Login;
