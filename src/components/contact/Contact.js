import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Contact = () => {
  return (
    <div>
      <Container id="contact">
        <Row>
          <Col className="d-flex justify-content-between">
            <a href="https://github.com/luit93" target=" blank">
              <i class="fab fa-github-alt"></i>>
            </a>
            <a href="https://www.linkedin.com/in/luitsaikia/" target=" blank">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:luitsaikia1@gmail.com">
              <i class="far fa-envelope"></i>
            </a>
            <a href="tel:0451205435">
              <i class="fab fa-phone-square"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
