import "../styles/footer.css";
import discordIcon from "../assets/discord.svg";
import twitterIcon from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div id="footerComponent">
      <p id="footerPara">Grumpy Gorilla Gang</p>
      <a href="https://discord.com/invite/f9Ps6hY8qF">
        <img src={discordIcon} alt="" />
      </a>
      <a href="https://twitter.com/GorillaAlphaNFT">
        <img src={twitterIcon} alt="" />
      </a>
      {/* <img src={youtubeIcon} alt="" />
      <img src={instaIcon} alt="" /> */}
    </div>
  );
};

export default Footer;
