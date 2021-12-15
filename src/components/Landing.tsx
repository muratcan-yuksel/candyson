import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/landing.css";
import landingIcon from "../assets/ico_1.gif";

const Landing = () => {
  return (
    <main>
      <div id="landingComponent">
        <Container>
          <Row>
            <Col xs={6} md={6} sm={6} xl={6} lg={6} xxl={6}>
              <div id="landingText">
                <h1 id="landingTitle">Grumpy Gorilla Gang</h1>
                <p id="landingPara">
                  {" "}
                  400 Grumpy Gorillas eating bananas on the Solana Blockchain!
                  <br />
                  <br />
                  “The #1 Alpha Group On Solana”
                </p>
              </div>
            </Col>
            <Col xs={6} md={6} sm={6} xl={6} lg={6} xxl={6}>
              <div id="landingImgContainer">
                <img
                  id="landingImg"
                  data-aos="zoom-in"
                  src={landingIcon}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default Landing;
