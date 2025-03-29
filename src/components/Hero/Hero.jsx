import React from "react";
import "./Hero.css";


const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2 className="hero-title">
          Hi, I'm <span className="gradient-text">Siva Teja</span>
        </h2>
        <p className="hero-description">Passionate Web Developer</p>
        <a
  href="https://drive.google.com/file/d/17Cvq8W0WkzX2xr9y_9tBvloAHXYV0Rd9/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="hero-button"
>
  Resume/CV
</a>

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
