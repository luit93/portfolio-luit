import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { TopNavBar } from "../top-nav-bar/TopNavBar";
import "./hero.style.css";

import myImg from "../../assets/img/luit.png";

export const Hero = () => {
  return (
    <div className="hero">
      <TopNavBar />
      <Container>
        <Row className="mt-5">
          <Col md="5" className="order-md-2">
            <div>
              <img src={myImg} alt="luit" />
            </div>
          </Col>
          <Col md="7">
            <div className="info mt-5 fs-3 fw-bold">
              <h1 className="fs-1">Hi, I'm Luit</h1>
              <p>Lorem21 </p>
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
