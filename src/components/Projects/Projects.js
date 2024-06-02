import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Market Mate"
              description="Market Mate is an ultimate online shopping MERN Stack Project, seamlessly blending cutting-edge technology with user-friendly design. Market Mate offers a dynamic platform for both admin and users to explore a vast array of products. Market Mate provides a seamless shopping experience from start to finish."
              ghLink="https://github.com/shivanshb07/Market-Mate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Budget Buddy"
              description="Budget Buddy is a financial management portal which helps user to keep a record of their income, expenses and all other transactions. The user has to build up their own profile and then start working on the website. All the data of user and transaction is stored in MongoDB"
              ghLink="https://github.com/shivanshb07/Budget-Buddy"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="HealthHub"
              description="Health Hub is a Health center project where people can explore a wealth of information on various aspects of health and well-being. The main objective of the project is to empower users with knowledge to make informed decisions about your health. I worked on this project during Hack The Mountains 4.0 with my Team TechPhoenix."
              ghLink="https://github.com/shivanshb07/HealthHub---Hack-The-Mountains-4.0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="ATM Interface - Octanet"
              description="It is a console-based application with five different classes. In order to use the system, the user must enter his or her user ID and pin when it starts. Once the details are entered successfully, ATM functionality is unlocked Tool Used: Java."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
