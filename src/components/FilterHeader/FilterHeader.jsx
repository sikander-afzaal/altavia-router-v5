import "./FilterHeader.css";

import {
  faChevronDown,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import { useState } from "react";

const FilterHeader = () => {
  const [dropMenu, setDropMenu] = useState(false);
  const [liveBtn, setLiveBtn] = useState(true);
  return (
    <div className="filter-header">
      <div className="left-filter">
        <div className="live-finished">
          <button
            onClick={() => setLiveBtn(true)}
            className={`${liveBtn ? "active-btn" : ""}`}
          >
            <div className="green-circle"></div> Live
          </button>
          <button
            onClick={() => setLiveBtn(false)}
            className={`${!liveBtn ? "active-btn" : ""}`}
          >
            Finished
          </button>
        </div>
        <div className="flex">
          <p>Staked Only</p>
          <ToggleBtn />
        </div>
      </div>
      <div className="right-filter">
        <div className="filter-input">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search" />
          <div className="filter-drop mob-filter">
            <p onClick={() => setDropMenu((prev) => !prev)}>
              <FontAwesomeIcon icon={faFilter} />
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
        <div className="filter-drop">
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
    </div>
  );
};

export default FilterHeader;
