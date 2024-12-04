import React from 'react';
import '../styles/Nav.css';
import logo from '../assets/logo.svg';
import { FaLinkedin, FaGithub, FaReddit } from 'react-icons/fa';
import { IoLogoBehance } from 'react-icons/io5';

const Nav = () => {
  return (
    <nav className="navbar">
      <a href="#" aria-label="Ir a la página principal">
        <img src={logo} alt="Logo de mi marca personal" />
      </a>
      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/creativesth/" target="_blank" rel="noopener noreferrer" aria-label="Ir a LinkedIn">
            <FaLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/CreativeSTH" target="_blank" rel="noopener noreferrer" aria-label="Ir a GitHub">
            <FaGithub className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/creativeSTH" target="_blank" rel="noopener noreferrer" aria-label="Ir a Behance">
            <IoLogoBehance className="icon icon2" />
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/user/creativeSTH/" target="_blank" rel="noopener noreferrer" aria-label="Ir a Reddit">
            <FaReddit className="icon icon2" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
