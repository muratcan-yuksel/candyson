import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/information.css";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Information = () => {
  //this aos is for the transition animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="informationComponent">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoImgContainer">
              <img
                data-aos="flip-left"
                src={image1}
                alt=""
                className="infoImg"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoTextGroup">
              <h1 className="infoTitle">Alpha Group</h1>
              <p className="infoPara">
                Our alpha group is the main utility behind Grumpy Gorilla Gang,
                which will be the most powerful alpha on the Blockchain! Our
                goal is to create a hyper competitive environment by
                incentivizing our troops in our discord through rewards and
                payouts via Sol. You can climb the ranks and compete to be the
                Gorilla General that will be given Solana weekly! To find out
                more about becoming the Gorilla General, please come check out
                our Discord.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoTextGroup">
              <h1 className="infoTitle">The Vision</h1>
              <p className="infoPara">
                We understand that Solana NFTs is a place where people can go
                from a little capital to an actual sizable amount. Some people
                have the ability to call NFTs consistently and earn multiples of
                their capital. Some of these people have no influence or
                network. Our main goal is to give the power to the people and
                create a decentralized alpha group that rewards our top members.
                Anybody can become the General and guide our troops to victory!
                The real question is who will it be?
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoImgContainer">
              <img
                data-aos="flip-right"
                src={image2}
                alt=""
                className="infoImg"
              />
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoImgContainer">
              <img src={image3} alt="" className="infoImg" />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="infoTextGroup">
              <h1 className="infoTitle">Title</h1>
              <ul>
                <li>@Gorilla Recruit = All Holders</li>
                <li>@Gorilla Soldier = Top 20</li>
                <li> Recruits @Gorilla General = Top Soldier</li>
              </ul>
              <p className="infoPara">
                We also have some other big things coming for the Gorilla
                Discord and Troops but our goal is too under promise and over
                deliver, at this point the only guarantee we can make is the
                alpha group.
              </p>
            </div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Information;
