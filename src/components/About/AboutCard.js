import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jeevan Joshi </span>
            from <span className="purple"> Bageshwar, Uttarakhand India.</span>
            <br />
            I am presently engaged with two startups, namely Growthers and Coderscrux.
            <br />
            Currently I'm pursuing B.Tech CSE from Graphic Era Hill University Bhimtal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Embrace the challenge of large projects; don't fear them. Take them on, complete them, and discover the art of mastering each task in a more refined manner"{" "}
          </p>
          <footer className="blockquote-footer">Jeevan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
