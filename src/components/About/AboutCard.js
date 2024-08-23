import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivansh Bahl </span>
            from <span className="purple"> Chandigarh, India.</span>
            <br />
            I am currently pursuing my Bacholers of Engineering in Computer
            Science
            Currently Working as a Technical Project Associate at SalesCode.ai 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gyming
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Finding New Opportunities
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "AIM IT Don't just DREAM IT"{" "}
          </p>
          <footer className="blockquote-footer">Shivansh Bahl</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
