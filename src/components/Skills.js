import React, { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'TypeScript', percent: 71 },
    { name: 'JavaScript', percent: 71 },
    { name: 'React.js', percent: 71 },
  ];

  const additionalSkills = [
    { name: 'Angular', percent: 71 },
    { name: 'GitHub', percent: 71 },
    { name: 'Tailwind', percent: 71 },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }, // Ajusta el umbral según sea necesario
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className="skills">
      <h3 className="skills__title">SKILLS</h3>
      <article className="skills__content" ref={skillsRef}>
        <article className="skills__content__first">
          {skills.map((skill) => (
            <div key={skill.name}>
              <p>{skill.name}</p>
              <div className="progress">
                <div className={`progress__bar ${isVisible ? 'animate' : ''}`} style={{ width: isVisible ? `${skill.percent}%` : '0%' }}>
                  <span className="progress__bar__text">{skill.percent}%</span>
                </div>
              </div>
            </div>
          ))}
        </article>

        <article className="skills__content__text">
          <span className="skills__text__a">CSS3</span>
          <span className="skills__text__b">HTML</span>
        </article>

        <article className="skills__content__second">
          {additionalSkills.map((skill) => (
            <div key={skill.name}>
              <p>{skill.name}</p>
              <div className="progress">
                <div className={`progress__bar ${isVisible ? 'animate' : ''}`} style={{ width: isVisible ? `${skill.percent}%` : '0%' }}>
                  <span className="progress__bar__text">{skill.percent}%</span>
                </div>
              </div>
            </div>
          ))}
        </article>
      </article>
    </section>
  );
};

export default Skills;
