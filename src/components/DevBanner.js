import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";
import { useState } from "react";
import headerImg from "../assets/images/header.png";
import { Link } from "react-router-dom";

function DevBanner() {
  const [loopNum, setLoopNum] = useState(0); //to indicate which index is being displayed
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["ML & NLP Enthusiast", "Data Science Student", "Model"];
  const [currText, setCurrText] = useState("");
  const period = 2000; //period of time between transition of each word
  const [delta, setDelta] = useState(300 - Math.random() * 100); //how fast one letter comes after another
  const [isVisible, setIsVisible] = useState(true);
  const bannerRef = useRef(null);

  //word gets deleted faster than typed out

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return; // don't run animation when not visible
    }

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [currText, delta, isVisible]);

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
              A M2 Data Science student at Université Paris-Saclay, ML & NLP
              enthusiast, and part-time{" "}
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
