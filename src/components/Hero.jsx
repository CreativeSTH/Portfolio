import React from 'react';
import '../styles/Hero.css';
import avatar from '/img/avatar.webp';
import curriculum from '/presentationCV.pdf'

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
                <span className="parallax__text__a">GAME</span>
                <span className="parallax__text__b">DEV</span>
              </article>
              <article className="parallax__about">
                <h3 className="parallax__title__about">ABOUT ME</h3>
                <p className="parallax__text__about">
                Game Programmer | Game Interface Programmer (Unity 3D)
                Experienced software developer transitioning into the game development industry with a strong foundation in programming logic and 8+ years of expertise in frontend development. Proficient in Unity 3D and C# for game programming and UI/UX implementation. Skilled in creating interactive and responsive game interfaces, leveraging my extensive knowledge of JavaScript, TypeScript, HTML5, and CSS3. Passionate about combining technical expertise and creativity to deliver engaging gaming experiences.
                </p>
                <a className="parallax__button__about" href='curriculum' target="_blank" rel="noopener noreferrer" download="presentationCV.pdf"> Download my CV</a>
              </article>
            </article>
          </article>
        </section>
    );
};

export default Hero;