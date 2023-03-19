import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/images/color-sharp.png";
import { SKILLS } from "./images/index.js";
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import "react-multi-carousel/lib/styles.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="skill" id="skills">
        <div className="skill-wrapper">
          <Container className="container">
            <Row className="row">
              <Col className="col-12">
                <div className="skill-bx">
                  <h2>Skills</h2>
                  <Carousel
                    ssr
                    responsive={responsive}
                    infinite={true}
                    className="skills-slider"
                    itemClass="image-item"
                  >
                    <div className="item">
                      <Image draggable={false} src={SKILLS.react}></Image>
                      <h5>React</h5>
                    </div>
                    <div className="item">
                      <Image draggable={false} src={SKILLS.angular}></Image>
                      <h5>Angular</h5>
                    </div>
                    <div className="item">
                      <Image draggable={false} src={SKILLS.html}></Image>
                      <h5>HTML</h5>
                    </div>
                    <div className="item">
                      <Image draggable={false} src={SKILLS.css}></Image>
                      <h5>CSS</h5>
                    </div>
                    <div className="item">
                      <Image draggable={false} src={SKILLS.java}></Image>
                      <h5>Java</h5>
                    </div>
                    <div className="item">
                      <Image draggable={false} src={SKILLS.javascript}></Image>
                      <h5>Javascript</h5>
                    </div>
                    <div className="item">
                      <Image draggable={false} src={SKILLS.cplus}></Image>
                      <h5>C++</h5>
                    </div>
                    <div className="item">
                      <Image draggable={false} src={SKILLS.typescript}></Image>
                      <h5>Typescript</h5>
                    </div>
                    <div className="item">
                      <Image draggable={false} src={SKILLS.spring}></Image>
                      <h5>Spring</h5>
                    </div>
                    <div className="item">
                      <Image draggable={false} src={SKILLS.python}></Image>
                      <h5>Python</h5>
                    </div>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Container>
          <img className="background-image-left" src={colorSharp} alt="Image" />
        </div>
      </section>
    </>
  );
}

export default Skills;
