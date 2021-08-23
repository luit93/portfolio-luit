import React, { useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { TopNavBar } from "../top-nav-bar/TopNavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import "./hero.style.css";

import myImg from "../../assets/img/luit.png";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in",
      delay: 100,
      // disable: "mobile",
    });
  }, []);
  return (
    <div className="hero">
      <TopNavBar />
      <Container>
        <Row className="mt-5">
          <Col md="5" className="order-md-2">
            <div
              data-aos="zoom-in-up"
              data-aos-delay="100"
              data-aos-offset="200"
              // data-aos-duration="600"
              // data-aos-anchor=".example-selector"
            >
              <img src={myImg} alt="luit" />
            </div>
          </Col>
          <Col md="7">
            <div className="info mt-5 fs-3 fw-bold">
              <h1 data-aos="fade-down" className="fs-1">
                Hi, I'm Luit
              </h1>
              <p data-aos="fade-up">Lorem21 </p>
              <div>
                <Button variant="danger" sm>
                  Hire me!
                </Button>
                {"  "}
                <Button variant="outline-danger" sm>
                  Resume
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
