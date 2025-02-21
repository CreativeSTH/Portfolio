import React from 'react';
import '../styles/Projects.css';
import project1 from '/img/img-p1.webp';
import project3 from '/img/img-p3.webp';
import project4 from '/img/img-p4.webp';
import project5 from '/img/img-p5.webp';
import project6 from '/img/img-p6.webp';
import project7 from '/img/img-p7.webp';

const Project = () => {
  return (
    <section id="sectionPin">
      <div className="pin__wrap__sticky">
        <div className="pin__wrap">
          <div className="item">
            <h3 className="item__title">PROJECS</h3>
          </div>
          <div className="item">
            <div className="item__content">
              <p className='item__content__category'>GAME DEVELOP</p>
              <h3 className="item__content__title">FUNNY GUYS Videogame</h3>
              <img className="item__content__photo" src={project4} />
              <ul className='item__content__tech'>
                <li className='content__tech__i'>C#</li>
                <li className='content__tech__i'>Unity 3D</li>
              </ul>
              <a
                href="https://github.com/CreativeSTH/FunnyGuys-PrototypeGame"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to my github"
                className="item__content__botton"
              >
                VIEW PROJECT
              </a>
            </div>
          </div>
          <div className="item">
            <div className="item__content">
            <p className='item__content__category'>FrontEnd</p>
              <h3 className="item__content__title">POKEDEX</h3>
              <img className="item__content__photo" src={project5} />
              <ul className='item__content__tech'>
                <li className='content__tech__i'>React.js</li>
                <li className='content__tech__i'>JavaScript</li>
                <li className='content__tech__i'>CSS 3</li>
              </ul>
              <a
                href="https://github.com/CreativeSTH/Pokedex"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to my github"
                className="item__content__botton"
              >
                VIEW PROJECT
              </a>
            </div>
          </div>
          <div className="item">
            <div className="item__content">
            <p className='item__content__category'>FrontEnd</p>
              <h3 className="item__content__title">RICK AND MORTY APP </h3>
              <img className="item__content__photo" src={project7} />
              <ul className='item__content__tech'>
                <li className='content__tech__i'>React.js</li>
                <li className='content__tech__i'>JavaScript</li>
                <li className='content__tech__i'>CSS 3</li>
              </ul>
              <a
                href="https://github.com/CreativeSTH/rick-and-morty-app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to my github"
                className="item__content__botton"
              >
                VIEW PROJECT
              </a>
            </div>
          </div>
          <div className="item">
            <div className="item__content">
            <p className='item__content__category'>FrontEnd</p>
              <h3 className="item__content__title">FORTUNE COOKIE </h3>
              <img className="item__content__photo" src={project6} />
              <ul className='item__content__tech'>
                <li className='content__tech__i'>React.js</li>
                <li className='content__tech__i'>JavaScript</li>
                <li className='content__tech__i'>CSS 3</li>
              </ul>
              <a
                href="https://github.com/CreativeSTH/Fortune-Cookie-app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to my github"
                className="item__content__botton"
              >
                VIEW PROJECT
              </a>
            </div>
          </div>
          <div className="item">
            <div className="item__content">
            <p className='item__content__category'>FrontEnd</p>
              <h3 className="item__content__title">FLEXBOX, LIKE BENTO UI</h3>
              <img className="item__content__photo" src={project1} />
              <ul className='item__content__tech'>
                <li className='content__tech__i'>CSS 3</li>
                <li className='content__tech__i'>HTML 5</li>
              </ul>
              <a
                href="https://github.com/CreativeSTH/Only-Flexbox-Like-A-Bento-Ui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to my github"
                className="item__content__botton"
              >
               VIEW PROJECT
              </a>
            </div>
          </div>
          <div className="item">
            <div className="item__content">
            <p className='item__content__category'>FrontEnd</p>
              <h3 className="item__content__title">ONLY CSS SLIDER</h3>
              <img className="item__content__photo" src={project3} />
              <ul className='item__content__tech'>
                <li className='content__tech__i'>CCS 3</li>
                <li className='content__tech__i'>HTML 5</li>
              </ul>
              <a
                href="https://github.com/CreativeSTH/Incredible-Pure-Css-Slider-"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to my github"
                className="item__content__botton"
              >
                VIEW PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;