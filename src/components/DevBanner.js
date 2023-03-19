import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";
import { useState } from "react";
import headerImg from "../assets/images/header.png";
import { Link } from "react-router-dom";

function DevBanner() {
  const [loopNum, setLoopNum] = useState(0); //to indicate which index is being displayed
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["CS Student", "Software Engineer Wannabe", "Model"];
  const [currText, setCurrText] = useState("");
  const period = 2000; //period of time between transition of each word
  const [delta, setDelta] = useState(300 - Math.random() * 100); //how fast one letter comes after another
  // const [delta, setDelta] = useState(100000000000);

  //word gets deleted faster than typed out

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setDelta(10000000000000);
      } else {
        setDelta(300 - Math.random() * 100);
        setLoopNum(0);
        setIsDeleting(false);
        setCurrText("");
      }
    };

    window.addEventListener("scroll", onScroll);
    //since we're adding event listener on mount, we have to remove it when component gets removed from the dom

    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [currText]);

  //tick function
  const tick = () => {
    let i = loopNum % toRotate.length; //index we're currently picking
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, currText.length - 1)
      : fullText.substring(0, currText.length + 1);

    setCurrText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      //not deleting and is full word
      setIsDeleting(true); //start to delete
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      //just finished deleting;
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my universe :{")"}</span>
            <h1>
              {`Hi! I'm Chloe Lau: `}
              <span className="wrap">{currText}</span>
            </h1>
            <p>
              A Computer Science undergraduate at NUS, software engineer & web
              developer wannabe, and part-time{" "}
              <Link to="/portfolio" className="model-link">
                model
              </Link>
              .
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={headerImg}
              alt="Header Img"
              className="bouncing-img"
            ></img>
          </Col>
        </Row>
      </Container>
      <ChevronDown />
    </section>
  );
}

export default DevBanner;
