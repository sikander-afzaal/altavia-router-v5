import "./LockSideBarItem.css";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LockSideBarItem = ({ active, icon, name, data }) => {
  return (
    <div className={`nft-box ${active ? "active-nft-box" : ""}`}>
      <div className="flex">
        <h2>
          <img src={icon} alt="" /> {name}
        </h2>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <p className="data">{data}</p>
    </div>
  );
};

export default LockSideBarItem;
