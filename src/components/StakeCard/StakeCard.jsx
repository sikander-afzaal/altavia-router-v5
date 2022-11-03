import {
  faChevronDown,
  faChevronUp,
  faInfoCircle,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./StakeCard.css";

const StakeCard = () => {
  const [openCard, setOpenCard] = useState(false);
  return (
    <div className="stake-card">
      <div className="stake-card-header">
        <div className="flex">
          <img src="/stake-ico.svg" alt="" />
          <div>
            <h6>Earn FOR</h6>
            <p>Stake Cake</p>
          </div>
        </div>
      </div>
      {openCard ? (
        <div className="mid-card">
          <div className="flex">
            <p>My Positions</p>
            <button className="inverse-purple">
              <FontAwesomeIcon icon={faLock} /> Locket
            </button>
          </div>
          <div className="black-stake-box">
            <div className="flex">
              <p>Tava Locked</p>
              <h6>
                156,53 <br />
                $205
              </h6>
            </div>
            <div className="flex">
              <p>Unlocked On</p>
              <h6>Sep 07 2022</h6>
            </div>
            <button className="inverse-purple">Extend</button>
            <div className="flex">
              <p>APR</p>
              <h6>20%</h6>
            </div>
            <div className="flex">
              <p>Locked Boost</p>
              <h6>90 Days</h6>
            </div>
            <div className="flex">
              <p>Yield Boost</p>
              <h6>+3.9%</h6>
            </div>
            <div className="flex">
              <p>NFT Staked</p>
              <h6>2</h6>
            </div>
            <div className="inverse-purple inverse-red">
              Stake Secondskin NFT
            </div>
          </div>
          <div className="mid-bottom">
            <div className="flex">
              <p>APR</p>
              <h6>10.10</h6>
            </div>
            <div className="flex">
              <p>Total Staked</p>
              <h6>678.8989 TAVA</h6>
            </div>
            <div className="flex">
              <p>Ends In</p>
              <h6>
                <img src="timer-pause.svg" alt="" /> 30 Days
              </h6>
            </div>
            <button className="white-border">See Token Info</button>
            <button className="purple-btn">View Project Site</button>
            <button className="white-border">View Contract</button>
          </div>
        </div>
      ) : (
        <div className="mid-card">
          <div className="flex">
            <p>APR</p>
            <p>99%</p>
          </div>
          <div className="flex">
            <h6>High Remaining</h6>
            <h6>100M</h6>
          </div>
          <div className="right-bottom-stake">
            <p>
              <img src="/card-coin.svg" alt="" /> Enable Pool
            </p>
            <button className="purple-btn">Connect Wallet</button>
          </div>
        </div>
      )}
      <div
        className="bottom-card"
        style={{ justifyContent: openCard ? "flex-end" : "space-between" }}
      >
        {!openCard && (
          <div>
            <button className="purple-btn">
              <img src="/card-coin.svg" alt="" /> Manual
            </button>
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
        )}
        <FontAwesomeIcon
          onClick={() => {
            setOpenCard((prev) => !prev);
          }}
          icon={openCard ? faChevronUp : faChevronDown}
        />
      </div>
    </div>
  );
};

export default StakeCard;
