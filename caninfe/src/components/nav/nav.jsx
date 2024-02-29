import react from "react";
import logo from "../../assets/images/logo.PNG";
import Logout from "./../logout/logout";

import "../../assets/css/dashboard.css";

const Nav = () => {
  return (
    <>
      <link rel="icon" href={logo} />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
      />

      <header>
        <ul className="menu">
          <li>
            <a href="#/">Inicio</a>
          </li>
          <li>
            <a href="chat">Chats</a>
          </li>
          <li>
            <a href="#/">Servicios</a>
          </li>
          <li>
            <a href="#/">Acerca De</a>
          </li>
          <li>
            <a href="#/">Contacto</a>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </header>
      <body></body>
    </>
  );
};

export default Nav;
