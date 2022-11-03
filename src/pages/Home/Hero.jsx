import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Hero.css";

const Hero = () => {
  const mobile = window.innerWidth;
  return (
    <div className="hero">
      <div className="img-wrapper">
        <img src="/hero.png" alt="" />
      </div>
      <div className="right-hero">
        <h1>
          STAKE <br /> TAVA & WIN
        </h1>
        <p>
          Just stake TAVA or Second skin NFT to earn with high APR and low risk
        </p>
      </div>
    </div>
  );
};

export default Hero;
