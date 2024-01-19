import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import attendace from "../../Assets/Projects/1.png";
import automail from "../../Assets/Projects/2.png";
import shopping from "../../Assets/Projects/3.png";
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
              imgPath={attendace}
              isBlog={false}
              title="Attendance using Face Recognition"
              description="Use Face recognition for attendance in class, company,... If anyone not present in the class more than 2 times, it will automatically send an email to notice. "
              ghLink="https://github.com/The-White-Bear/Attendance_Face_Recog_and_Email"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={automail}
              isBlog={false}
              title="Email Automation"
              description="My personal app to auto send email in a list ( from xlsx file ) using python. It takes the content from html or txt files and renders it using python. With variables as recipient name, subject and content. "
              ghLink="https://github.com/The-White-Bear/Email-Automation-Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Shopping Website"
              description="A shopping website where you can buy different products. I developed this with my team and I was responsible for the back-end using Java Spring Boot. "
              ghLink="https://github.com/Shodydosh/BE_JAVA_BTL"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
