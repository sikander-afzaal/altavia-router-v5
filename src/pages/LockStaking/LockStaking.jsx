import {
  faCaretDown,
  faCaretUp,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import LockSideBarItem from "../../components/LockSideBarItem/LockSideBarItem";
import NftCard from "../../components/NftCard/NftCard";
import "./LockStaking.css";

//lock stacking table row
function LockStakingRow() {
  return (
    <tr>
      <td>
        <img src="/nft-test.png" alt="" />
      </td>
      <td>High</td>
      <td>150,123</td>
      <td>5</td>
      <td>30 days</td>
      <td>Oct 07 2022</td>
      <td>1256</td>
      <td>
        <FontAwesomeIcon icon={faChevronRight} />
      </td>
    </tr>
  );
}
//lock stacking table heading
function LockStakingHead() {
  return (
    <tr>
      <th>Poll</th>
      <th>
        <div className="col">
          Reward Token{" "}
          <div className="arrow-col">
            <FontAwesomeIcon icon={faCaretUp} />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </th>
      <th>
        <div className="col">
          TAVA Locked
          <div className="arrow-col">
            <FontAwesomeIcon icon={faCaretUp} />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </th>
      <th>
        <div className="col">
          NFT Staked
          <div className="arrow-col">
            <FontAwesomeIcon icon={faCaretUp} />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </th>
      <th>
        <div className="col">
          Locked Duration (days)
          <div className="arrow-col">
            <FontAwesomeIcon icon={faCaretUp} />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </th>
      <th>
        <div className="col">
          Unlocked On
          <div className="arrow-col">
            <FontAwesomeIcon icon={faCaretUp} />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </th>
      <th>
        <div className="col">
          Reward Amount
          <div className="arrow-col">
            <FontAwesomeIcon icon={faCaretUp} />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </th>
      <th>
        <div className="col">
          Action
          <div className="arrow-col">
            <FontAwesomeIcon icon={faCaretUp} />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </th>
    </tr>
  );
}

const LockStaking = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const [activeBtn, setActiveBtn] = useState("staked");
  return (
    <div className="lock-staking">
      <div className="location">
        <Link to={"/"}>Home</Link>
        <span>/</span>
        <p>Lock Staking</p>
      </div>
      <div className="flex">
        <div className="total-nfts">
          <LockSideBarItem
            active
            name={"Crypto.ETH"}
            data={"0x0sd9...8s9d"}
            icon={"/icon2.svg"}
          />
          <LockSideBarItem
            name={"Balance (Tava)"}
            data={"4392.322 $400"}
            icon={"/wallet.svg"}
          />
          <LockSideBarItem
            name={"Total TAVA Locked"}
            data={"125.2 k"}
            icon={"/lock.svg"}
          />
          <LockSideBarItem
            name={"Total NFT Staked"}
            data={"5"}
            icon={"/chart-square.svg"}
          />
          <LockSideBarItem
            name={"Total Reward Value"}
            data={"~1.2k USD"}
            icon={"/fire.svg"}
          />
        </div>
        <div className="nft-details">
          <div className="detail-header">
            <div className="page-selector">
              <button
                onClick={() => setActiveBtn("staked")}
                className={`${activeBtn === "staked" ? "active-tab" : ""} `}
              >
                NFT Staked
              </button>
              <button
                onClick={() => setActiveBtn("locked")}
                className={`${activeBtn === "locked" ? "active-tab" : ""} `}
              >
                TAVA Locked
              </button>
              <button
                onClick={() => setActiveBtn("token-earned")}
                className={`${
                  activeBtn === "token-earned" ? "active-tab" : ""
                } `}
              >
                Token Earned
              </button>
              <button
                onClick={() => setActiveBtn("nft-earned")}
                className={`${activeBtn === "nft-earned" ? "active-tab" : ""} `}
              >
                NFT Earned
              </button>
            </div>
            <div className="filter-drop stake-drop">
              <p onClick={() => setDropMenu((prev) => !prev)}>
                Sort By <FontAwesomeIcon icon={faChevronDown} />
              </p>
              <div className={`drop-menu ${dropMenu ? "active-drop" : ""}`}>
                <div className="drop-item">
                  <input type={"checkbox"} />
                  <h2>Hot</h2>
                </div>
                <div className="drop-item">
                  <input type={"checkbox"} />
                  <h2>APR</h2>
                </div>
                <div className="drop-item">
                  <input type={"checkbox"} />
                  <h2>Earned</h2>
                </div>
                <div className="drop-item">
                  <input type={"checkbox"} />
                  <h2>Total Staked</h2>
                </div>
                <div className="drop-item">
                  <input type={"checkbox"} />
                  <h2>Latest</h2>
                </div>
              </div>
            </div>
          </div>
          {activeBtn !== "nft-earned" ? (
            <div className="lock-table">
              <table>
                <thead>
                  <LockStakingHead />
                </thead>
                <tbody>
                  <LockStakingRow />
                  <LockStakingRow />
                  <LockStakingRow />
                  <LockStakingRow />
                  <LockStakingRow />
                </tbody>
              </table>
            </div>
          ) : (
            <div className="card-grid">
              <NftCard name={"Second Skin #15"} img={"/nft.png"} />
              <NftCard name={"Second Skin #15"} img={"/nft.png"} />
              <NftCard name={"Second Skin #15"} img={"/nft.png"} />
              <NftCard name={"Second Skin #15"} img={"/nft.png"} />
            </div>
          )}
          <div className="load-more-div">
            <p>Load More</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockStaking;
