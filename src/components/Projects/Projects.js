import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
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
              imgPath={suicide}
              isBlog={false}
              title="Coderscrux"
              description="Coders Crux is your centralized hub for all things coding. Unleash the complete potential of your coding club with a platform that organizes coding contests, quiz contests, hackathons, codeathons, and provides robust process monitoring. Join our vibrant community and elevate your coding experience with engaging challenges and collaborative learning. Fuel your passion for programming at Coderscrux, the ultimate destination for coding enthusiasts and clubs alike."
              ghLink="https://github.com/JeevanJoshi4434/Coderscrux"
              demoLink="https://coderscrux.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Growbuild"
              description="A SAAS application for Builders to manage their projects, building, unit purchased, and billing with ease. With features such as project management, building management, unit purchase, billing, and more."
              ghLink="https://github.com/Jeevanjoshi4434/growbuild"
              demoLink="https://growbuild-jg.onrender.com/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Storage Inventory Optimizer"
              description="Developed the Storage and Inventory Optimizer (S.I.O) using deep learning and machine learning to enhance storage space utilization and inventory management, addressing overstocking and understocking issues."
              ghLink="https://github.com/JeevanJoshi4434/Storage-Inventory-Optimizer"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Cal.com"
              description="Contributed on the frontend part issue of Cal.com."
              ghLink="https://github.com/JeevanJoshi4434/Cal.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Freedlink - A Social Media platform with job listings"
              description="Freedlink is a Social Media platform with job listings. It enables users to post jobs, apply for jobs, and view job listings. Users can also chat with other users."
              ghLink="https://github.com/JeevanJoshi4434/Freedlink"
            demoLink="https://freedlink.netlify.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
