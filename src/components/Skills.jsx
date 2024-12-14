import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <article className="skills__content__text">
        <span className="skills__text__a">CSS3</span>
        <span className="skills__text__b">HTML</span>
      </article>
      <article className="skills__content__second">
        <p className="content__second__text">
          I love working with
          <span className="highlight"> modern css3 </span>
          and react.js
        </p>
        <p>
          But I also have strong skills with <span className="highlight">JavaScript</span>, <span className="highlight">TypeScript</span>, Tailwind,
          Git, <span className="highlight">Angular.Js</span> & next.js
        </p>
      </article>
    </section>
  );
};

export default Skills;
