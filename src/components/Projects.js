import React from 'react';
import '../styles/Projects.css';

const Project = () => {
  const index = 1;

  return (
    <section className="slider">
      <h2 className="slider__title">PROJECTS</h2>
      <ul className="slider__content">
        <li style={{ '--index': index }}>elemento 1</li>
        <li style={{ '--index': index + 1 }}>elemento 2</li>
        <li style={{ '--index': index + 2 }}>elemento 3</li>
      </ul>
    </section>
  );
};

export default Project;
