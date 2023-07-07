import React from "react";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
       // style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        We are a new T-shirt store that specialises clothes to make customers look and feel good.
        </p>
      </div>
    </div>
  );
}

export default About;
