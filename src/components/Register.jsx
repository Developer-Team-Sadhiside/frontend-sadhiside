import "../assets/styles/Register.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [notificationMessage, setNotificationMessage] = useState("");
  const [toggleNotification, setToggleNotification] = useState(false);

  const [eye, setEye] = useState(true);
  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

  const changeInputPasswordType = () => {
    if (passwordType == "password") {
      setPasswordType("text");
      setEye(false);
    } else {
      setPasswordType("password");
      setEye(true);
    }
  };

  function validateInputRegister(input) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setToggleNotification(false);
    if (input.nama === "" || reg.test(input.email) === false || input.password === "" || input.password.length <= 5) {
      setToggleNotification(true);
      if (input.nama === "") {
        setNotificationMessage("Nama tidak boleh kosong");
      } else if (input.email === "") {
        setNotificationMessage("Email tidak boleh kosong");
      } else if (reg.test(input.email) === false) {
        setNotificationMessage("Format email salah");
      } else if (input.password === "") {
        setNotificationMessage("Password kosong");
      } else if (input.password.length <= 5) {
        setNotificationMessage("Password harus lebih dari 6 karakter");
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
      let result = await fetch("http://localhost:8000/api/v1/users/register", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const statusResponse = result.status;

      result = await result.json();

      setToggleNotification(true);
      setNotificationMessage(result.message);

      if (statusResponse === 202) {
        setNotificationMessage("Register success");
        navigate("/login");
      }
      setTimeout(() => {
        setToggleNotification(false);
      }, 1500);
    }
  }

  function hideNotification() {
    setToggleNotification(false);
  }

  return (
    <section className="register container-fluid ps-md-0">
      <div className="row g-0">
        <div className="col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="register d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <div className="header-register">
                    <h1>Daftar</h1>
                    {toggleNotification && (
                      <span
                        onClick={() => {
                          hideNotification();
                        }}
                      >
                        <div class="alert alert-danger" role="alert">
                          {notificationMessage}
                        </div>
                      </span>
                    )}
                  </div>
                  <form>
                    <div className="register-form">
                      <label className="form-label" htmlFor="nama-lengkap">
                        Nama
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nama Lengkap"
                        id="nama-lengkap"
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Contoh: johndoe@gmail.com"
                        id="email"
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                      />
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <div className="form-group">
                        <input
                          type={passwordType}
                          className="form-control"
                          placeholder="Masukkan password"
                          name="password"
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                        />
                        <span onClick={changeInputPasswordType}>{eye ? <img src="/svg/fi_eye-off.svg" alt="Eye Icon" className="register-eye-icon" /> : <img src="/svg/fi_eye.svg" alt="Eye Icon" className="register-eye-icon" />}</span>
                      </div>
                      <input onClick={postRegister} type="submit" className="form-control register-button" value="Daftar" />
                      <p className="text-center">
                        Sudah punya akun?{" "}
                        <Link to="/login" className="link-already-registered">
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
