import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import risolvaLogo from "../../../assets/risolva logos/RISOLVA AUTOMATIZACIONES - sin fondo.png";
import "./Login.css";
import { ILoginUser, IUserAuth } from "../../../interfaces/IAuth";
import { useAuth } from "../../../hooks/useAuth";
import { loginService } from "../../../api/authAPI";
import { useDispatch } from "react-redux";

import axiosInstance from "../../../utils/axiosInstance";
import { AxiosError } from "axios";

export const Login = () => {
  const { loginUser, user } = useAuth();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const from = "/";
  // const from = location.state.from.pathname || "/";

  const userRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const errRef = useRef();

  const [userInput, setUserInput] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (userRef.current && passwordRef.current) {
      const userData: ILoginUser = {
        email: userRef.current.value,
        password: passwordRef.current.value,
      };
      try {
        // loginUser(userData);
        // const user: IUserAuth | null = await loginService(userData);
        const user: IUserAuth = await axiosInstance
          .post("/auth/authenticate", userData)
          .then((res) => {
            return res.data;
          });
        if (user) {
          console.log(user);
          // localStorage.setItem("token", user.token);
          dispatch(setUserAuth(user));
          navigate(from, { replace: true });
        }
      } catch (error) {
        const err = error as AxiosError;
        if (err.response?.status === 400) {
          setErrMsg("Usuario y/o Contraseña no deben estar vacios");
        } else if (err.response?.status === 401) {
          setPwd("");
          passwordRef.current.value = "";
          setErrMsg("Usuario y/o Contraseña incorrecta");
        } else {
          setErrMsg("Login Failed");
        }
        errRef.current.focus();
      }

      setUserInput("");
      setPwd("");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo">
          <img
            src={
              "https://banner2.cleanpng.com/20180418/gre/kisspng-human-resources-login-management-information-payro-track-5ad7cda3586cb1.5605091515240923233622.jpg"
            }
            alt="Risolva Logotipo"
            className="auth-header-logo-img"
          />
        </div>
        <h1 className="auth-header-title">Bienvenido al Dashboard</h1>
        <p className="auth-header-subtitle">Ingresa con tu cuenta</p>
      </div>
      <div className="auth-body">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form action="" className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="user" className="input-label">
              usuario
            </label>
            <input
              type="text"
              className="input-control"
              id="user"
              ref={userRef}
              placeholder="Ingresa tu usuario"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              ref={passwordRef}
              className="input-control"
              id="password"
              placeholder="Ingresa tu password"
              required
            />
          </div>
          <Link to="/forgotPassword" className="link-end">
            Olvidaste tu contraseña?
          </Link>
          <button
            type="submit"
            className="btn-submit"
            onClick={(e) => handleSubmit(e)}
          >
            Sign in
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};
