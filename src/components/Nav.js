import React from 'react';
import '../styles/Nav.css'; // Importa el archivo CSS para estilos
import logo from '../assets/logo.svg';
import lin from '../assets/img/socials/linkedin.svg';
import be from '../assets/img/socials/behance.svg';
import github from '../assets/img/socials/github.svg';
import reddit from '../assets/img/socials/reddit.svg';

const Nav = () => {
  return (
    <nav className="navbar">
      <a>
        <img src={logo} alt="Logo" />
      </a>
      <aside>
        <a>
          <img src={lin} alt="LinkedIn" />
        </a>
        <a>
          <img src={github} alt="GitHub" />
        </a>
        <a>
          <img src={be} alt="Behance" />
        </a>
        <a>
          <img src={reddit} alt="Reddit" />
        </a>
      </aside>
    </nav>
  );
};

export default Nav;
