import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-btns">
        <img className="home-button-background" src="images/coder.jpg"></img>
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          destination="dev"
        >
          The Coder
        </Button>
        <img className="home-button-background" src="images/shoot1.jpg"></img>
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          destination="portfolio"
        >
          The Model
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
