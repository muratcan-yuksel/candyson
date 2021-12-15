import React, { useEffect } from "react";
import "../styles/roadmap.scss";
import Aos from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
  //this aos is for the transition animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="roadmapComponent">
      <h1 id="roadmapTitle">Roadmap</h1>
      <h2 data-aos="zoom-out" className="phaseTitle">
        Phase 1
      </h2>
      <p data-aos="zoom-out" className="roadPara">
        Generate Artwork for 400 Gorillas
      </p>{" "}
      <p data-aos="zoom-out" className="roadPara">
        Launch Twitter
      </p>{" "}
      <p data-aos="zoom-out" className="roadPara">
        Launch Discord
      </p>{" "}
      <p data-aos="zoom-out" className="roadPara">
        Release the 400 Gorillas via a Stealth Launch on December 15th at 7pm
        UTC.
      </p>
      <h2 data-aos="zoom-out" className="phaseTitle">
        Phase 2
      </h2>
      <p data-aos="zoom-out" className="roadPara">
        Add Grape Verification to the Discord Server.
      </p>{" "}
      <p data-aos="zoom-out" className="roadPara">
        Implement new roles for the gorilla holders/soldiers and begin the
        process of creating the most powerful alpha group on Solana.
      </p>{" "}
      <p data-aos="zoom-out" className="roadPara">
        Launch Discord
      </p>{" "}
      <p data-aos="zoom-out" className="roadPara">
        Get listed on Moonrank and Magic Eden
      </p>
    </div>
  );
};

export default Roadmap;
