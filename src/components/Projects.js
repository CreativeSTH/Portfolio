import React from 'react';
import '../styles/Projects.css';
import { FaHtml5, FaExternalLinkAlt, FaCss3Alt, FaGithub } from 'react-icons/fa';
import project1 from '../assets/img/img-p1.webp';
import project2 from '../assets/img/img-p2.webp';
import project3 from '../assets/img/img-p3.webp';

const Project = () => {
  const index = 1;

  return (
    <section className="slider">
      <h2 className="slider__title">PROJECTS</h2>
      <ul className="slider__content">
        <li style={{ '--index': index }}>
          <img className="slider__image" src={project1} />
          <article className="slider__footer">
            <div className="slider__footer_tech">
              <FaCss3Alt />
              <FaHtml5 className="slider__footer_tech__icons" />
            </div>
            <div className="slider__footer_cta">
              <FaExternalLinkAlt className="slider__footer_cta" />
              <FaGithub />
            </div>
          </article>
        </li>
        <li style={{ '--index': index + 1 }}>
          <img className="slider__image" src={project2} />
          <article className="slider__footer">
            <div className="slider__footer_tech">
              <FaHtml5 className="slider__footer_tech__icons" />
            </div>
            <div className="slider__footer_cta">
              <FaExternalLinkAlt className="slider__footer_cta" />
            </div>
          </article>
        </li>
        <li style={{ '--index': index + 2 }}>
          <img className="slider__image" src={project3} />
          <article className="slider__footer">
            <div className="slider__footer_tech">
              <FaHtml5 className="slider__footer_tech__icons" />
            </div>
            <div className="slider__footer_cta">
              <FaExternalLinkAlt className="slider__footer_cta" />
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default Project;
