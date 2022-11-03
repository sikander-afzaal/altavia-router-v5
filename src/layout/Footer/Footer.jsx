import "./Footer.css";
import {
  faDiscord,
  faInstagram,
  faMedium,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="top-footer">
          <div className="foot-logo">
            <img src="/logo.png" alt="" />
            <p>
              We bring brands into the metaverse through our virtual platforms
              and access to others
            </p>
          </div>
          <div className="foot-col">
            <h2>Contact</h2>
            <div className="foot-text">
              <p>General Information</p>
              <a href="mailto:solutions@altava.com">solutions@altava.com</a>
            </div>
            <div className="foot-text">
              <p>Media inquires</p>
              <a href="mailto:media@altava.com">media@altava.com</a>
            </div>
            <div className="foot-text">
              <p>NFT Marketing inquires</p>
              <a href="mailto:community@altava.com">community@altava.com</a>
            </div>
          </div>
          <div className="foot-col">
            <h2>Seol</h2>
            <p>1410, 503 Teheranro, Gangnam-gu, Seoul, Korea</p>
          </div>
          <div className="foot-col">
            <h2>Singapore</h2>
            <p>
              6 Eu Tong Sen Street <br /> #11-1OU <br /> The Central <br />{" "}
              Singpore (059817)
            </p>
          </div>
        </div>
        <div className="bottom-footer">
          <p>© 2022 ALTAVA Group. ∙ Privacy ∙ Terms & Conditions</p>
          <div className="social-div">
            <a href="#">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faMedium} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
