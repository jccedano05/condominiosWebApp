import React from "react";
import { Link } from "react-router-dom";

import "./ForgotPassword.css";

export const ForgotPassword = () => {
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
        <h1 className="auth-header-title">Olvidaste tu password?</h1>
        <p className="auth-header-subtitle">
          Ingresa con correo electronico y se te enviara un mensaje con el
          procedimiento.
        </p>
      </div>
      <div className="auth-body">
        <form action="" className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              usuario
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="correo@risolva.com"
              required
            />
          </div>
          <Link to="/login" className="link-end">
            Ir a inicio de sesion
          </Link>
          <button type="submit" className="btn-submit">
            Enviar
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};
