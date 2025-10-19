import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
         <h2 className="skills-heading">
          About <span className="highlight">Me</span>
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <h3>Passionate Software Developer</h3>
            <p className="about-para">
               -- With hands-on experience in both frontend and backend development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.
            </p>
            <p className="about-para">
              I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
            </p>

            <div className="about-buttons">
              <a href="#contact" className="btn-primary">Get In Touch</a>
              <a href="https://drive.google.com/file/d/1-hTMr0PnXQPo4qsS2Q44RhcDCND18mJp/view?usp=sharing" className="btn-outline" target = "_blank">Download CV</a>
            </div>
          </div>

          <div className="about-cards">
            <div className="card">
              <h4>Web Development</h4>
              <p>Creating responsive websites and web applications with modern frameworks.</p>
            </div>
            <div className="card">
              <h4>Backend Development</h4>
              <p>Developing scalable APIs, managing databases, and ensuring robust server-side logic for high-performance applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
