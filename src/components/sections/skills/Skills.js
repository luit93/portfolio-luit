import React from "react";
import { SectionTitle } from "../../section-title/SectionTitle";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  return (
    <div id="skills" className="py-5">
      <Container>
        <Row>
          <Col>
            <SectionTitle title="Skills" />
            <div
              class="
              skills-list
              fs-3
              d-flex
              justify-content-between
              flex-wrap
              mt-4
            "
            >
              <div>
                <i class="fab fa-html5 text-primary"></i> HTML
              </div>
              <div>
                <i class="fab fa-css3-alt text-danger"></i> CSS
              </div>
              <div>
                <i class="fab fa-js-square text-warning"></i>javaScript
              </div>
              <div>
                <i class="fab fa-react"></i>React
              </div>
              <div>
                <i class="fab fa-node text-success"></i>Node
              </div>
              <div>
                <i class="fas fa-database text-success"></i>MongoDB
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
