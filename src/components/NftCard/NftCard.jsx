import "./NftCard.css";

const NftCard = ({ name, img }) => {
  return (
    <div className="nftCard">
      <img src={img} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default NftCard;
