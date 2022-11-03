import "./Menu.css";

const Menu = () => {
  return (
    <div className="main-menu">
      <div className="menu">
        <h1>
          Stake Your Tava Tokens, Earn 3rd Party Tokens and NFTs of Great
          Projects!
        </h1>
        <div className="menu-wrapper">
          <div className="menu-row">
            <div className="menu-item">
              <img src="/menu2.png" alt="" />
              <h2>Buy Tava</h2>
            </div>
            <div className="menu-item">
              <img src="/menu3.png" alt="" />
              <h2>Tava Staking</h2>
            </div>
            <div className="menu-item">
              <img src="/menu1.png" alt="" />
              <h2>NFT Staking</h2>
            </div>
          </div>
          <button className="purple-btn">Into the metaverse</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
