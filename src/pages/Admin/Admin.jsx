import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddModal from "../../components/AddModal/AddModal";
import AddNft from "../../components/AddNft/AddNft";
import "./Admin.css";

const AdminProjectItem = ({ name, icon, active }) => {
  return (
    <div
      className={`admin-project-box ${
        active ? "active-admin-project-box" : ""
      }`}
    >
      <div className="flex">
        <h2>
          <img src={icon} alt="" /> {name}
        </h2>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};
//admin table row ----------------------
const AdminRow = () => {
  const [activeRow, setActiveRow] = useState(false);
  return (
    <div className={`admin-row ${activeRow ? "active-row" : ""}`}>
      <div className="admin-row-btn">
        <div className="flex">
          <img src="/admin.png" alt="" />
          <h2>Project 1</h2>
        </div>
        <div className="admin-col">
          <h2>Reward Days</h2>
          <p>
            <img src="/timer-pause.svg" alt="" /> (2% 6% 10%)
          </p>
        </div>
        <div className="admin-col">
          <h2>Reward NFT</h2>
          <p>(2% 6% 10%)</p>
        </div>
        <div className="flex">
          <img src="/pen.svg" alt="" />
          <FontAwesomeIcon
            icon={activeRow ? faChevronUp : faChevronDown}
            onClick={() => setActiveRow((prev) => !prev)}
          />
        </div>
      </div>
      <div className={`expanded-admin-row ${activeRow ? "expand-active" : ""}`}>
        <div className="mob-col">
          <div className="admin-col">
            <h2>Reward Days</h2>
            <p>
              <img src="/timer-pause.svg" alt="" /> (2% 6% 10%)
            </p>
          </div>
          <div className="admin-col">
            <h2>Reward NFT</h2>
            <p>(2% 6% 10%)</p>
          </div>
        </div>
        <div className="flex">
          <div className="links">
            <p>
              Token Address:{" "}
              <a href="#">0x4780DC7f32816a0aF851666bF925c098e534t693</a>
              <img src="/export.svg" alt="" />
            </p>
            <p>
              Owner Address:{" "}
              <a href="#">0x4780DC7f32816a0aF851666bF925c098e534t693</a>
              <img src="/export.svg" alt="" />
            </p>
            <p>
              NFT 721 Address:{" "}
              <a href="#">0x4780DC7f32816a0aF851666bF925c098e534t693</a>
              <img src="/export.svg" alt="" />
            </p>
            <p>
              NFT 1155 Address:{" "}
              <a href="#">0x4780DC7f32816a0aF851666bF925c098e534t693</a>
              <img src="/export.svg" alt="" />
            </p>
          </div>

          <div className="right-expand">
            <img src="/stake-ico.svg" alt="" />
            <img src="/stake-ico.svg" alt="" />
          </div>
        </div>
        <div className="btn-div">
          <button className="purple-btn">White Paper</button>
          <button className="purple-btn">Website</button>
          <button className="white-border disabled">Contact Email</button>
          <button className="white-border ">Company Detail</button>
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const [addNft, setAddNft] = useState(false);
  return (
    <div className="lock-staking">
      {/* {addNft && <AddNft closeModal={setAddNft} />} */}
      {addNft && <AddModal closeModal={setAddNft} />}
      <div className="location">
        <Link to={"/"}>Home</Link>
        <span>/</span>
        <p>Lock Staking</p>
      </div>
      <div className="flex">
        <div className="total-nfts">
          <AdminProjectItem
            active
            name={"Project List 1"}
            icon={"/icon2.svg"}
          />
          <AdminProjectItem name={"Project List 2"} icon={"/wallet.svg"} />
        </div>
        <div className="nft-details">
          <div className="detail-header admin-header">
            <button onClick={() => setAddNft(true)} className="purple-btn">
              <FontAwesomeIcon icon={faPlus} /> New
            </button>
            {""}
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
          <div className="projects-admin">
            <AdminRow />
            <AdminRow />
            <AdminRow />
            <AdminRow />
          </div>
          <div className="load-more-div">
            <p>Load More</p>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
