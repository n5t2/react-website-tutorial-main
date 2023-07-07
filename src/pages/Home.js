import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background.jpg";
import "../styles/Home.css";
import FootballTop from "../assets/Psg.jpg"
import Wings from "../assets/Wings.jpg"
import R from "../assets/R.jpg"
import KidsNike from "../assets/KidsNike.jpg"

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>  </h1>
      </div>
      <img src={FootballTop} alt='FootballTop' width='300px' height='300px'/>
      <img src={Wings} alt='Wings' width='300px' height='300px'/>
      <img src={R} alt="R"  width='300px' height='300px'/>
      <img src={KidsNike} alt="KidsNike" width='300px' height='300px'/>
    </div>
  );
}

export default Home;
