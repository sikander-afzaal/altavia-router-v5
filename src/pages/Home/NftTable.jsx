import "./styles/NftTable.css";
import { useState } from "react";

import FilterHeader from "../../components/FilterHeader/FilterHeader";
import StakeTableRow from "../../components/StakeTableRow/StakeTableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import StakeCard from "../../components/StakeCard/StakeCard";

const NftTable = () => {
  const [gridView, setGridView] = useState(false);
  const [NFTPool, setNFTPool] = useState(false);
  return (
    <div className="nftTable">
      <div className="table-header">
        <h3>
          <span
            onClick={() => setNFTPool(false)}
            className={`${NFTPool ? "" : "bottom-style"}`}
          >
            Token pools
          </span>{" "}
          /{" "}
          <span
            onClick={() => setNFTPool(true)}
            className={`${NFTPool ? "bottom-style" : ""}`}
          >
            NFT Pools
          </span>
        </h3>
        <div className="view">
          <img
            onClick={() => {
              setGridView(false);
            }}
            className={`${gridView ? "" : "active"} `}
            src="/list.svg"
            alt=""
          />
          <img
            onClick={() => {
              setGridView(true);
            }}
            src="/grid.svg"
            className={`${gridView ? "active" : ""} `}
            alt=""
          />
        </div>
      </div>
      <div className="table">
        <FilterHeader />
        {gridView ? (
          <div className="grid-view">
            <StakeCard />
            <StakeCard />
            <StakeCard />
            <StakeCard />
            <StakeCard />
          </div>
        ) : (
          <>
            <StakeTableRow />
            <StakeTableRow />
            <StakeTableRow />
            <StakeTableRow />
          </>
        )}
        <div className="load-more-div">
          <p>Load More</p>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
};

export default NftTable;
