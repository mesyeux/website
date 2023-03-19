import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { BsDownload } from "react-icons/bs";
import { VscGithubAlt } from "react-icons/vsc";
import { Link } from "react-router-dom";
import resumePdf from "../assets/Chloe_Lau_Cheuk_Ying_Resume.pdf";

function DevNavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    //since we're adding event listener on mount, we have to remove it when component gets removed from the dom

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className="navbar-brand">
            chloe lau.
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              about
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              skills
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={
                activeLink === "experience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("experience")}
            >
              experience
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <Link to="https://www.instagram.com/cloyeeee/" target="_blank">
                <CiInstagram className="dev-social-icon" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/chloe-lau-cheuk-ying/"
                target="_blank"
              >
                <CiLinkedin className="dev-social-icon" />
              </Link>
              <Link to="https://github.com/mesyeux" target="_blank">
                <VscGithubAlt className="dev-social-icon" />
              </Link>
            </div>
            <Nav.Link
              href="#resume"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              <button className="vvd" onClick={() => console.log("connect")}>
                {/* <span>download resume</span> */}
                <a href={resumePdf} download>
                  resume &nbsp;
                  <BsDownload />
                </a>
              </button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DevNavBar;
