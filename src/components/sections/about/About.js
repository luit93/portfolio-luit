import React from "react";
import { SectionTitle } from "../../section-title/SectionTitle";
import { Container, Col, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import myImg from "../../../assets/img/luit.png";
export const About = () => {
  return (
    <div id="about" className="py-5">
      <Particles
        id="tsparticles"
        // init={this.particlesInit}
        // loaded={this.particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
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
            <img src={myImg} /*class="img-thumbnail"*/ alt="luit photo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
