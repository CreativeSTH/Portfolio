import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="parallax">
      {/* contenedor */}
      <article>
        {/* titulo */}
        <h1>Hi, Im SEBASTIAN TORRES</h1>
        {/* cuerpo del hero */}
        <article>
          {/* contenedor foto */}
          <article>
            <img />
          </article>
          {/* contenedor tipografy */}
          <article>
            <h2>FRONT END</h2>
          </article>
          {/* contenedor parrafo */}
          <article>
            <h3>ABOUT ME</h3>
            <p>
              I am a Graphic Designer and Frontend Developer in love with Angular and a staunch defender of TypeScript. Combining my 2 careers allows
              me to create web applications with incredible designs, highly aesthetic, but also always thought about user experience, accessibility,
              code quality and scalability.
            </p>
            <a> Download my CV</a>
          </article>
        </article>
      </article>
    </section>
  );
};

export default Hero;
