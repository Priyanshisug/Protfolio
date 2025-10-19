import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return(
        <section id= "hero" className="hero-section">
            <div className="hero-container">
                <div className="hero-text-block">
                    <h1 className="hero-heading">
                        <span>Hi, I'm</span>
                         <span> Priyanshi</span>
                         <span> Sugandhi</span>
                    </h1>
                    <p className="hero-subheading fade-in delay-3">
            I'm a passionate software developer with hands-on experience in both frontend and backend development. 
            I specialize in building clean, responsive user interfaces and robust backend systems using modern technologies.
          </p>
          <div className="hero-button fade-in delay-4">
            <a href="#projects" className="cosmic-button">View My Work</a>
          </div>
        </div>
      </div>
        </section>
    )
}
export default HeroSection;