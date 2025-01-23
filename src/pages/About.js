import React from "react";
import "../styles/About.css"; // Link to the CSS file

const About = () => {
  return (
    <div className="about-container">
      {/* Photo Section */}
      <div className="photo-container">
        <img
          src="./images/profile/2.jpg" // Replace with your photo's path
          alt="Your Name"
          className="profile-photo"
        />
      </div>

      {/* Introduction Section */}
      <div className="intro-container">
        <h1 className="title">ABOUT ME</h1>
        <p className="intro-paragraph">
          I am Hui Li, a dedicated designer and computational thinker currently pursuing a Master of Architecture in Urban Design at Harvard University's Graduate School of Design. 
          My academic journey has been enriched by advanced coursework, including Data Science for Environmental Buildings, Machine Learning at MIT, and CS50. 
          With a strong foundation in programming languages like Python, JavaScript, and R, I excel at leveraging computational tools and frameworks, such as Flask, TensorFlow, and React, to explore innovative solutions in various field. 
          My expertise in data visualization and web-based development empowers me to bridge the gap between technical precision and creative vision.
        </p>
        <p className="intro-paragraph">
          I am deeply interested in technical problem-solving and frontend web design, leveraging my computational expertise to develop innovative solutions. 
          In the UTCI Optimization Algorithm project (GSD), I designed a machine learning-based predictive model to simulate and minimize the Universal Thermal Climate Index (UTCI) for urban layouts. 
          This involved data preprocessing, variable encoding, and creating visualization tools to enhance urban sustainability. 
          Additionally, I independently built this personal website using React, showcasing my ability to design user-friendly interfaces and seamless interactivity while combining technical rigor with aesthetic considerations.
        </p>

        {/* Link to CV */}
        <a
          href="/files/HL-CV.pdf" // Replace with your CV file path
          target="_blank"
          rel="noopener noreferrer"
          className="cv-link"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
