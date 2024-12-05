import React from 'react';
import '../styles/Hero.css';
import foto from '../assets/img/foto2.webp';

const Hero = () => {
  return (
    <section className="parallax">
      {/* contenedor */}
      <article className="parallax__content">
        {/* titulo */}
        <h1>Hi, Im SEBASTIAN TORRES</h1>
        {/* cuerpo del hero */}
        <article className="parallax__items">
          {/* contenedor foto */}
          <article>
            <img className="parallax__photo" src={foto} alt="foto de presentacion" />
          </article>
          {/* contenedor tipografy */}
          <article>
            <span className="parallax__text__a">FRONT</span>
            <span className="parallax__text__b">END</span>
          </article>
          {/* contenedor parrafo */}
          <article className="parallax__about">
            <h3 className="parallax__title__about">ABOUT ME</h3>
            <p className="parallax__text__about">
              I am a Graphic Designer and Frontend Developer in love with Angular and a staunch defender of TypeScript. Combining my 2 careers allows
              me to create web applications with incredible designs, highly aesthetic, but also always thought about user experience, accessibility,
              code quality and scalability.
            </p>
            <a className="parallax__button__about"> Download my CV</a>
          </article>
        </article>
      </article>
    </section>
  );
};

export default Hero;
