import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/Footer.css';
import { FaLinkedin, FaGithub, FaReddit } from 'react-icons/fa';
import { IoLogoBehance } from 'react-icons/io5';

const Fter = () => {
  return (
    <footer>
      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/creativesth/" target="_blank" rel="noopener noreferrer" aria-label="go to my LinkedIn">
            <FaLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/CreativeSTH" target="_blank" rel="noopener noreferrer" aria-label="go to my GitHub">
            <FaGithub className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/creativeSTH" target="_blank" rel="noopener noreferrer" aria-label="go to my Behance">
            <IoLogoBehance className="icon icon2" />
          </a>
        </li>
        <li>
          <a href="https://www.reddit.com/user/creativeSTH/" target="_blank" rel="noopener noreferrer" aria-label="go to my Reddit">
            <FaReddit className="icon icon2" />
          </a>
        </li>
      </ul>
      <span className="footer__info">sth.frontend@gmail.com</span>
      <span className="footer__info">+57 301 621 7578</span>
      <img className="footer__logo" src={logo} alt="My personal brand" />
    </footer>
  );
};

export default Fter;
