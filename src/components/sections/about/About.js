import React from "react";
import { SectionTitle } from "../../section-title/SectionTitle";
import { Container, Col, Row } from "react-bootstrap";
import myImg from "../../../assets/img/luit.png";
export const About = () => {
  return (
    <div id="about" className="py-5">
      <SectionTitle title="About" />
      <Container>
        <Row className="mt-5">
          <Col md="6">
            <div class=" mt-6">
              <h1>Luit</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto, recusandae animi.
              </p>
            </div>
          </Col>
          <Col md="6">
            <img src={myImg} class="img-thumbnail" alt="luit photo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
