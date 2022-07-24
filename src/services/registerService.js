import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterContext = createContext();

export function useRegisterContext() {
  return useContext(RegisterContext);
}

export function RegisterProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [notificationMessage, setNotificationMessage] = useState('');
  const [toggleNotification, setToggleNotification] = useState(false);

  const [eye, setEye] = useState(true);
  const [passwordType, setPasswordType] = useState('password');

  const navigate = useNavigate();

  const domain = 'https://secondhand-shadiside.herokuapp.com';

  const changeInputPasswordType = () => {
    if (passwordType == 'password') {
      setPasswordType('text');
      setEye(false);
    } else {
      setPasswordType('password');
      setEye(true);
    }
  };

  function validateInputRegister(input) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setToggleNotification(false);
    if (input.nama === '' || reg.test(input.email) === false || input.password === '' || input.password.length <= 5) {
      setToggleNotification(true);
      if (input.nama === '') {
        setNotificationMessage('Nama tidak boleh kosong');
      } else if (input.email === '') {
        setNotificationMessage('Email tidak boleh kosong');
      } else if (reg.test(input.email) === false) {
        setNotificationMessage('Format email salah');
      } else if (input.password === '') {
        setNotificationMessage('Password kosong');
      } else if (input.password.length <= 5) {
        setNotificationMessage('Password harus lebih dari 6 karakter');
      }
      setTimeout(() => {
        setToggleNotification(false);
      }, 1500);
      return false;
    } else {
      return true;
    }
  }

  async function postRegister(event) {
    event.preventDefault();
    const item = { nama: name, email: email, password: password };

    if (validateInputRegister(item)) {
      let result = await fetch(`${domain}/api/v1/users/register`, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const statusResponse = result.status;

      result = await result.json();

      setToggleNotification(true);
      setNotificationMessage(result.message);

      if (statusResponse === 202) {
        setNotificationMessage('Register success');
        navigate('/login');
      }
      setTimeout(() => {
        setToggleNotification(false);
      }, 1500);
    }
  }

  function hideNotification() {
    setToggleNotification(false);
  }

  const registerContextValue = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    notificationMessage,
    setNotificationMessage,
    toggleNotification,
    eye,
    setEye,
    passwordType,
    setPasswordType,
    changeInputPasswordType,
    postRegister,
    hideNotification,
  };

  return <RegisterContext.Provider value={registerContextValue}>{children}</RegisterContext.Provider>;
}
