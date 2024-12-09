import React, { useState } from 'react';
import '../styles/Nav.css';
import logo from '../assets/logo.svg';
import { FaLinkedin, FaGithub, FaReddit } from 'react-icons/fa';
import { IoLogoBehance } from 'react-icons/io5';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="#" aria-label="go to home">
        <img src={logo} alt="my personal brand" />
      </a>
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
      {/* Floating Action Button */}
      <div className="fab-container">
        <button className="fab" onClick={toggleMenu} aria-label="Open to see my socials networks">
          +
        </button>
        {isOpen && (
          <div className="fab-menu">
            <a href="https://www.linkedin.com/in/creativesth/" target="_blank" rel="noopener noreferrer" aria-label="go to my LinkedIn">
              <FaLinkedin className="fab-icon-e" />
            </a>
            <a href="https://github.com/CreativeSTH" target="_blank" rel="noopener noreferrer" aria-label="go to my GitHub">
              <FaGithub className="fab-icon" />
            </a>
            <a href="https://www.behance.net/creativeSTH" target="_blank" rel="noopener noreferrer" aria-label="go to my Behance">
              <IoLogoBehance className="fab-icon" />
            </a>
            <a href="https://www.reddit.com/user/creativeSTH/" target="_blank" rel="noopener noreferrer" aria-label="go to my Reddit">
              <FaReddit className="fab-icon" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
