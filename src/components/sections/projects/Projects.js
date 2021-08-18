import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SectionTitle } from "../../section-title/SectionTitle";
import tasker from "../../../assets/img/toDo.png";
import cal from "../../../assets/img/cal.png";
import prtfl from "../../../assets/img/profile.png";
export const Projects = () => {
  return (
    <div id="projects" className="py-5 ">
      <SectionTitle title="Projects" />
      <Container>
        <Row className="mt-5">
          <Col md="6">
            <img src={cal} width="100%" alt="calculator" />
          </Col>
          <Col md="6">
            <div className="fs-2 fw-bold">
              Prank Calculator |{" "}
              <a href="" target="_blank">
                <i className="fab fa-github"></i>
              </a>{" "}
              <a href="" target="_blank">
                <i className="fab fa-chrome"></i>
              </a>
            </div>
            <div className="fst-italic">Tech: HTML, CSS, JS</div>
            <p className="mt-3">
              <strong>About:</strong>Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Hic, alias velit.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="6" className="order-md-2">
            <img src={tasker} width="100%" alt="not to do tasks list" />
          </Col>
          <Col md="6" className="order-md-1">
            <div class="fs-2 fw-bold">
              Not To Do Task List |{" "}
              <a href="" target="_blank">
                <i className="fab fa-github"></i>
              </a>{" "}
              <a href="" target="_blank">
                <i className="fab fa-chrome"></i>
              </a>
            </div>
            <div class="fst-italic">Tech: HTML, CSS, JS</div>
            <p class="mt-3">
              <strong>About:</strong>Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Hic, alias velit.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="6">
            <img src={prtfl} width="100%" alt="calculator" />
          </Col>
          <Col md="6">
            <div className="fs-2 fw-bold">
              Personal Portfolio |{" "}
              <a href="" target="_blank">
                <i className="fab fa-github"></i>
              </a>{" "}
              <a href="" target="_blank">
                <i className="fab fa-chrome"></i>
              </a>
            </div>
            <div className="fst-italic">Tech: HTML, CSS, JS</div>
            <p className="mt-3">
              <strong>About:</strong>Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Hic, alias velit.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
