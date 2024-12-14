import React from 'react';
import '../styles/Projects.css';
import project1 from '/img/img-p1.webp';
import project3 from '/img/img-p3.webp';


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
              <h3 className="item__content__title">FLEXBOX, LIKE BENTO UI</h3>
              <img className="item__content__photo" src={project1} />
              <a
                href="https://github.com/CreativeSTH/Incredible-Pure-Css-Slider-"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to my github"
                className="item__content__botton"
              >
                PROJECT
              </a>
            </div>
          </div>
          <div className="item">
            <div className="item__content">
              <h3 className="item__content__title">ONLY CSS SLIDER</h3>
              <img className="item__content__photo" src={project3} />
              <a
                href="https://github.com/CreativeSTH/Incredible-Pure-Css-Slider-"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to my github"
                className="item__content__botton"
              >
                PROJECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;