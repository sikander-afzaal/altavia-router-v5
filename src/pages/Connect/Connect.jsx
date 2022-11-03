import "./Connect.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Connect = () => {
  return (
    <div className="main-connect">
      <div className="menu connect">
        <div className="location">
          <Link to={"/"}>Home</Link>
          <span>/</span>
          <p>Connect Wallet</p>
        </div>
        <div className="connect-box">
          <div className="connect-row">
            <img src="/connect1.png" alt="" />
            <h2>Coin Base</h2>
          </div>
          <div className="connect-row">
            <img src="/connect2.png" alt="" />
            <h2>Wallet Connect</h2>
          </div>
          <div className="connect-row">
            <img src="/connect3.png" alt="" />
            <h2>Metamask</h2>
          </div>

          <Link>
            <FontAwesomeIcon icon={faChevronLeft} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Connect;
