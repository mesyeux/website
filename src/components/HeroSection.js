import React, { useState } from "react";
import "./HeroSection.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [hoveredSide, setHoveredSide] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      <div className="gradient-overlay" />

      <div className="hero-btns">
        <div
          className={`hero-side ${
            hoveredSide === "model" ? "hero-side-shrink" : ""
          } ${hoveredSide === "coder" ? "hero-side-expand" : ""}`}
          onMouseEnter={() => setHoveredSide("coder")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => navigate("/dev")}
        >
          <div className="hero-image-container">
            <img
              className={`home-button-background ${
                hoveredSide === "model" ? "hero-image-dimmed" : ""
              }`}
              src="images/coder.png"
              alt="Coder background"
            />
          </div>

          <div className="hero-gradient-left" />

          <div className="hero-content">
            <div
              className={`hero-content-inner ${
                hoveredSide === "coder" ? "hero-content-active" : ""
              }`}
            >
              <div className="hero-tag-container">
                <div className="hero-tag hero-tag-purple">
                  <p>Tech</p>
                </div>
              </div>

              <h2 className="hero-title">The Coder</h2>

              <p className="hero-description">Data Science, ML, NLP</p>
            </div>
          </div>
        </div>

        <div className="hero-divider">
          <div className="hero-divider-line" />
        </div>

        <div
          className={`hero-side ${
            hoveredSide === "coder" ? "hero-side-shrink" : ""
          } ${hoveredSide === "model" ? "hero-side-expand" : ""}`}
          onMouseEnter={() => setHoveredSide("model")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => navigate("/portfolio")}
        >
          <div className="hero-image-container">
            <img
              className={`home-button-background ${
                hoveredSide === "coder" ? "hero-image-dimmed" : ""
              }`}
              src="images/shoot1.jpg"
              alt="Model background"
            />
          </div>

          <div className="hero-gradient-right" />

          <div className="hero-content">
            <div
              className={`hero-content-inner ${
                hoveredSide === "model" ? "hero-content-active" : ""
              }`}
            >
              <div className="hero-tag-container">
                <div className="hero-tag hero-tag-emerald">
                  <p>Fashion</p>
                </div>
              </div>

              <h2 className="hero-title">The Model</h2>

              <p className="hero-description">Runways, editorials, lookbooks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
