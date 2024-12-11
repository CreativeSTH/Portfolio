import React from 'react';
import '../styles/HeroText.css';
const HeroText = () => {
  return (
    <article>
      <section className="hero">
        <p className="hero__text">
          I am <span className="highlight">passionate</span> about user experience & <span className="highlight">creative</span> interface develop
        </p>
      </section>
    </article>
  );
};

export default HeroText;
