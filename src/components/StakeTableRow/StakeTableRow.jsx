import "./StakeTableRow.css";
import { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StakeTableRow = () => {
  const [openListItem, setOpenListItem] = useState(false);
  return (
    <div className="stake-row-wrapper">
      <div className={`stakeRow ${openListItem ? "active-stake-row" : ""}`}>
        <div className="top-stake">
          <div className="flex">
            <img src="/stake-ico.svg" alt="" />
            <div>
              <h6>Earn FOR</h6>
              <p>Stake Cake</p>
            </div>
          </div>
          <div className="stake-col">
            <h5>Peel Earned</h5>
            <p>
              <span>9.0</span> 1730 USD
            </p>
          </div>
          <div className="stake-col">
            <h5>Total Staked</h5>
            <p>642,185 TAVA</p>
          </div>
          <div className="stake-col">
            <h5>APR</h5>
            <p>25.76%</p>
          </div>
          <div className="stake-col">
            <h5>Ends In</h5>
            <p>
              90 Days <img src="/timer-pause.svg" alt="" />
            </p>
          </div>
          <FontAwesomeIcon
            onClick={() => setOpenListItem((prev) => !prev)}
            icon={faChevronDown}
          />
        </div>
        <div className={`bottom-stake ${openListItem ? "openStakeRow" : ""}`}>
          <div className="left-bottom-stake">
            <div className="border-top-bot">
              <div className="flex">
                <p>APR</p>
                <p>99%</p>
              </div>
              <div className="flex">
                <h6>High Remaining</h6>
                <h6>100M</h6>
              </div>
              <div className="flex mob-stake">
                <p>Peel Earned</p>
                <p>9.0 1730 USD</p>
              </div>
              <div className="flex mob-stake">
                <h6>Total Staked</h6>
                <h6>642,185 TAVA</h6>
              </div>
              <div className="flex mob-stake">
                <p>APR</p>
                <p>25.67%</p>
              </div>
              <div className="flex mob-stake">
                <h6>Ends In</h6>
                <h6>90 Days</h6>
              </div>
            </div>
            <div className="stake-btns">
              <button className="white-border">
                See Token Info <img src="/export.svg" alt="" />
              </button>
              <button className="purple-btn">
                View Project Site <img src="/export.svg" alt="" />
              </button>
              <button className="white-border disabled">
                View Contract <img src="/export.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="right-bottom-stake">
            <p>
              <img src="/card-coin.svg" alt="" /> Enable Pool
            </p>
            <button className="purple-btn">Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeTableRow;
