import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import "../assets/css/login.css";
import axios from "axios";
import logo from "../assets/images/image-2.png";
import mujer from "../assets/images/img.png";
// import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
import adduser from "./adduser";

function Login() {
  const [correo, setCorreo] = useState({});
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function handleCallBackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setCorreo(userObject);
    setLoggedIn(true); // Set isLoggedIn to true on successful login
    document.getElementById("signInDiv").hidden = true;
    window.location.href = "./dashboard";
  }

  // Cerrar Sesión

  // function handleSignOut(event) {
  //   setUser({});
  //   setIsLoggedIn(false); // Set isLoggedIn to false on logout
  //   document.getElementById("signInDiv").hidden = false;
  // }

  useEffect(() => {
    /*global google */
    document.title = "Login";
    google.accounts.id.initialize({
      client_id:
        "412195763180-f6p9e6o3jqktud93kl5jokejiep5kc8l.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:5000/login", { correo, password })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.error("Error en inicio de sesión:", err);
        setError(
          "Error en inicio de sesión. Por favor, verifica tus credenciales."
        );
        setLoading(false);
      });

    if (loggedIn) {
      window.location.href = "/dashboard";
    }
  }

  function handleGithubLogin() {
    // Redirige al usuario a la página de autorización de GitHub
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=e3339b26e407afc5d80e&redirect_uri=http://localhost:3000/callback";
  }

  return (
    <div className="wrapper">
      <div className="inner">
        <img
          src={mujer}
          alt=""
          style={{ height: "360px" }}
          className="image-1"
        />
        <form onSubmit={handleSubmit}>
          <h3>Iniciar sesion</h3>
          <div className="form-holder">
            <span className="lnr lnr-user"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Correo"
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="form-holder">
            <span className="lnr lnr-lock"></span>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>

          <div>
            <br />
            <center>
              <a href="/adduser">
                <p>Aún no estás registrado?</p>
              </a>
            </center>
          </div>
          <br />
          <center>
            <div id="signInDiv"></div>
            <button onClick={handleGithubLogin}>
              Iniciar sesión con GitHub
            </button>
          </center>
        </form>
        <img src={logo} alt="" className="image-2" />
      </div>
    </div>
  );
}

export default Login;
