import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
      <h2 className="hero-title">
        Hi, I'm <span className="gradient-text">Siva Teja</span>
      </h2>
      <p className="hero-description">
          Passionate Web Developer
      </p>

      </div>
      <div className="hero-img">
        <div className="img-wrapper">
          <img
            src="https://res.cloudinary.com/dqc90vi99/image/upload/v1738072301/my_pic_qukgsp.png"
            className="img-container"
            alt="Siva Teja Cherukupalli"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
