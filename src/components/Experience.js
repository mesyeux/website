import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import dbsLogo from "../assets/images/dbs.png";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Experience() {
  const [showElement, setShowElement] = useState(false);

  const handleShow = () => {
    setShowElement(!showElement);
  };

  return (
    <>
      <section className="experience" id="experience">
        <div className="experience-wrapper">
          <h2>Experience</h2>
          <div className="experience-item-wrapper">
            <div
              className={
                showElement
                  ? "experience-item active"
                  : "experience-item inactive"
              }
              onClick={handleShow}
            >
              <img src={dbsLogo} />
              <h3>DBS Software Engineering Internship</h3>
            </div>
            <div className="experience-item active"></div>
            <div
              class={
                showElement ? "vertical-line active" : "vertical-line inactive"
              }
            >
              Hello Hello Lorem Ipsum
            </div>
          </div>
          {/* <Container className="experience-container">
            <Row>
              <Col className="experience-col">
                <Card
                  style={{ width: "18rem" }}
                  bg="secondary"
                  onClick={handleShow}
                >
                  <Card.Img variant="top" src={dbsLogo} class="logo" />
                  <Card.Body>
                    <Card.Title>DBS Software Engineering Intern</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container> */}
        </div>
      </section>
    </>
  );
}

export default Experience;
