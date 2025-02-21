import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <article className="skills__content__text">
        <span className="skills__text__a">C#</span>
        <span className="skills__text__b">UNITY</span>
      </article>
      <article className="skills__content__second">
        <p className="content__second__text">
        I'm passionate about game
          <span className="highlight"> development  </span>
          and 3D design with Unity 3D.
        </p>
        <p>
          But I also have strong skills with <span className="highlight">Logic Programing</span>, <span className="highlight">JavaScript and TypeScript</span>, Tailwind,
          Git, <span className="highlight">Angular.js,</span>React.js & Next.js
        </p>
      </article>
    </section>
  );
};

export default Skills;
