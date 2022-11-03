import "./HomeStake.css";
import NftCard from "../NftCard/NftCard";

const HomeStake = () => {
  return (
    <div className="table stake-table">
      <div className="staking-nft-header">
        <h1>Staking NFT</h1>
        <button className="purple-btn">Stake</button>
      </div>
      <div className="stake-info">
        <p>
          ALTAVA SECONDSKIN NFT STAKED: <span>1</span>
        </p>
        <p>
          Current Boosted APR: <span>1.2%</span>
        </p>
        <p>
          Seleted NFT to stake: <span>2</span>
        </p>
        <p>
          Total Boosted APR: <span>3.9%</span>
        </p>
      </div>
      <div className="nft-card-grid">
        <NftCard name={"Second Skin #15"} img={"/nft.png"} />
        <NftCard name={"Second Skin #15"} img={"/nft.png"} />
        <NftCard name={"Second Skin #15"} img={"/nft.png"} />
        <NftCard name={"Second Skin #15"} img={"/nft.png"} />
        <NftCard name={"Second Skin #15"} img={"/nft.png"} />
      </div>
    </div>
  );
};

export default HomeStake;
