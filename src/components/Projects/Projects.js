import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
 import cryptoCurrncy from "../../Assets/Projects/cryptocurrncy.png";
 import IEEE from "../../Assets/Projects/ieee.png";
 import SpeeApp from "../../Assets/Projects/speeApp.png";
 import wetherapp from "../../Assets/Projects/wetherapp.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 id="projects" className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col lg={3} className="project-card">
            <ProjectCard
              imgPath={cryptoCurrncy}
              isBlog={false}
              title="crypto Currency pricing"
              description="Track Cryptocurrency 2022 Pricing According To World's Largest Independent
               Cryptocurrency Website (CoinGecko)"
              link="https://react-cryptocurruncy.web.app/"
            />
          </Col>

          <Col lg={3} className="project-card">
            <ProjectCard
              imgPath={IEEE}
              isBlog={false}
              title="IEEE Form"
              description="Information Form using React.js  for IEEE student branch"
              link="https://ieeeform.firebaseapp.com/"
            />
          </Col>

          <Col lg={3} className="project-card">
            <ProjectCard
              imgPath={SpeeApp}
              isBlog={false}
              title="SPEE Student Activity"
              description="A single page application website using React.js for SPEE student activity"
              link="https://spee-24d96.firebaseapp.com/"
            />
          </Col>

          <Col lg={3} className="project-card">
            <ProjectCard
              imgPath={wetherapp}
              isBlog={false}
              title="wether App "
              description="world weather  and forecast app with two themes"
              link="https://react-weather-app-6d22b.web.app/forecast"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
