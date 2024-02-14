/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../assets/css/login.css";
import login from "./login";

import planta from "../assets/images/image-2.png";
import mujer from "../assets/images/img.png";

function Adduser() {
  const [passwordMatchMessage, setPasswordMatchMessage] = useState("");
  const [passwordStrengthMessage, setPasswordStrengthMessage] = useState("");
  const [passwordMatchMessageColor, setPasswordMatchMessageColor] =
    useState("");
  const [passwordStrengthMessageColor, setPasswordStrengthMessageColor] =
    useState("");

  // Función para validar la fortaleza de la contraseña
  function validatePasswordStrength(password) {
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasNumber && hasSpecialChar;
  }

  // Función para manejar el evento onBlur en el campo de confirmación de contraseña
  function handleConfirmPasswordBlur(event) {
    const { value } = event.target;
    const password = document.getElementById("password").value;

    if (password === value) {
      setPasswordMatchMessage("Las contraseñas coinciden");
      setPasswordMatchMessageColor("green");
    } else {
      setPasswordMatchMessage("Las contraseñas no coinciden");
      setPasswordMatchMessageColor("red");
    }

    if (validatePasswordStrength(password)) {
      setPasswordStrengthMessage("La contraseña es fuerte");
      setPasswordStrengthMessageColor("green");
    } else {
      setPasswordStrengthMessage(
        "La contraseña debe contener números y caracteres especiales"
      );
      setPasswordStrengthMessageColor("red");
    }
  }

  return (
    <>
      <title>Sign Up</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className="wrapper">
        <div className="inner">
          <img src={mujer} alt="" className="image-1" />

          <form
            action="http://127.0.0.1:8000/register"
            method="post"
            encType="multipart/form-data"
          >
            <h3>Regístrese</h3>

            <div className="form-holder">
              <span className="lnr lnr-user"></span>
              <input
                type="text"
                className="form-control"
                placeholder="nombre"
                name="nombre"
                id="nombre"
                required
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-users"></span>
              <input
                type="text"
                className="form-control"
                placeholder="apellido"
                name="apellido"
                id="apellido"
                required
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-indent-decrease"></span>
              <select
                name="tipo_documento"
                id="tipo_documento"
                style={{
                  marginLeft: "50px",
                  borderLeft: "var(--size) solid transparent",
                  borderRight: "var(--size) solid transparent",
                  borderTop: "var(--size) solid black",
                }}
              >
                <option value="CC">Cedula de Ciudadania</option>
                <option value="TI">Tarjeta de Identidad</option>
              </select>
            </div>

            <div className="form-holder">
              <span className="lnr lnr-phone"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="celular"
                id="celular"
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-file-add"></span>
              <input
                type="text"
                className="form-control"
                placeholder="identificacion"
                name="identificacion"
                id="identificacion"
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-smile"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Edad"
                name="edad"
                id="edad"
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-heart"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Peso"
                name="peso"
                id="peso"
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-envelope"></span>
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="correo"
                id="correo"
                required
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-lock"></span>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                id="password"
                name="password"
                required
              />
            </div>

            <div className="form-holder">
              <span className="lnr lnr-lock"></span>
              <input
                type="password"
                className="form-control"
                placeholder="Confirma Contraseña"
                id="confirmPassword"
                onBlur={handleConfirmPasswordBlur}
                required
              />
            </div>

            <span
              id="passwordMatchMessage"
              style={{ color: passwordMatchMessageColor }}
            >
              {passwordMatchMessage}
            </span>
            <br />
            <span
              id="passwordStrengthMessage"
              style={{ color: passwordStrengthMessageColor }}
            >
              {passwordStrengthMessage}
            </span>

            <input type="submit" value="submit" />

            <div>
              <br />
              <p>Est&aacute;s registrada?</p>
              <a href="/login/" target="_blank">
                <span>Sí</span>
              </a>
            </div>
          </form>

          <img src={planta} alt="" className="image-2" />
        </div>
      </div>
    </>
  );
}

export default Adduser;
