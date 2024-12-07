import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h3 className="skills__title">SKILLS</h3>
      <article className="skills__content">
        <article className="skills__content__firts">
          <p>TypeScript</p>
          <progress value="71" max="100" />
          <p>JavaScript</p>
          <progress value="71" max="100" />
          <p>React.j</p>
          <progress value="71" max="100" />
        </article>
        <article className="skills__content__text">
          <span className="skills__text__a">CSS3</span>
          <span className="skills__text__b">HTML</span>
        </article>
        <article className="skills__content__second">
          <p>Angular</p>
          <progress value="71" max="100" />
          <p>GitHub</p>
          <progress value="71" max="100" />
          <p>Tailwind</p>
          <progress value="71" max="100" />
        </article>
      </article>
    </section>
  );
};

export default Skills;
