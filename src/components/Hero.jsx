import React from 'react';
import '../styles/Hero.css';
import avatar from '/img/avatar.webp';

const Hero = () => {
    return (
        <section className="parallax">
          <article className="parallax__content">
            <h1 className="parallax__tittle">Hi, Im SEBASTIAN TORRES</h1>
            <article className="parallax__items">
              <article className="parallax__items__photo">
                <img className="parallax__photo" src={avatar} alt="foto de presentacion" />
              </article>
              <article className="parallax__items_text">
                <span className="parallax__text__a">FRONT</span>
                <span className="parallax__text__b">END</span>
              </article>
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