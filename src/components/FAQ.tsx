import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/FAQ.css";
import Aos from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  //this aos is for the transition animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="faqContainer">
      <h1 id="faqGeneralTitle"> FAQ</h1>
      <Container>
        <Row>
          <Col xs={12} md={12} sm={12} xl={12} lg={12} xxl={12}>
            <div data-aos="fade-right" className="faqDiv">
              <h1 className="faqTitle">When can you mint?</h1>
              <p className="faqPara">
                This is a stealth launch, launching will be on December 15th at
                7pm UTC.
              </p>
            </div>
          </Col>
        </Row>{" "}
        <Row>
          <Col xs={12} md={12} sm={12} xl={12} lg={12} xxl={12}>
            <div data-aos="fade-left" className="faqDiv">
              <h1 className="faqTitle">Where Grumpy Gorillas live?</h1>
              <p className="faqPara">
                The Gorillas will be eating bananas on the Solana Blockchain.
              </p>
            </div>
          </Col>
        </Row>{" "}
        <Row>
          <Col xs={12} md={12} sm={12} xl={12} lg={12} xxl={12}>
            <div data-aos="fade-right" className="faqDiv">
              <h1 className="faqTitle">How many will be minted?</h1>
              <p className="faqPara">
                There will only be 400 Gorillas available.
              </p>
            </div>
          </Col>
        </Row>{" "}
        <Row>
          <Col xs={12} md={12} sm={12} xl={12} lg={12} xxl={12}>
            <div data-aos="fade-left" className="faqDiv">
              <h1 className="faqTitle">How much is it to mint?</h1>
              <p className="faqPara">Mint price will be .2 Solana.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
