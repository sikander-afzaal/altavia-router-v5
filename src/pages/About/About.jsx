import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <>
      <img src="/bg2.png" className="bg-about" alt="" />
      <div className="about">
        <div className="location">
          <Link to={"/"}>Home</Link>
          <span>/</span>
          <p>About</p>
        </div>
        <div className="about-hero">
          <img src="/logo-small.png" alt="" />
        </div>
        <div className="desc-about">
          <p>5.1 TAVA Utility Token</p>
          <p>
            TAVA is a purpose-built utility token for ALTAVA Market, which sits
            at the intersection of luxury, creativity, and the latest
            developments in gamified and virtual fashion technology. The driver
            for TAVA tokens is the need to provide a relevant mechanism for
            purchasers to participate in the explosive growth of luxury in the
            metaverse, and to align with the preferences of a rapidly expanding
            luxury-focused community.
          </p>
          <p>
            TAVA tokens will be the base currency of ALTAVA Eco-system including
            NFT Market and Altava: Worlds of You. TAVA tokens will be served as
            a ticket for access to exclusive NFTs and other curated virtual
            assets, special auctions and unique experiences built in
            collaboration with relevant luxury houses, designers and creators
            across disciplines.
          </p>
          <div className="grey-div">
            <p>TAVA token holders benefit from key privileges:</p>
            <ul>
              <li>
                Every initial luxury NFTs released will receive TAVA payments
                comprehensively.
              </li>
              <li>
                Exclusive auctions will be held in which only TAVA token holders
                will be able to participate.
              </li>
            </ul>
          </div>
          <p>
            Accordingly, TAVA tokens will operate as a device that prevents
            unintentional value loss of the assets and escalates the exclusivity
            of our marketplace platform, which will ultimately benefit our NFT
            holders and token holders.
          </p>
          <div className="grey-div">
            <p>Key features:</p>
            <ul>
              <li>
                Ensures the exclusivity of the ALTAVA Market value proposition;
              </li>
              <li>
                Protects and powers the exclusivity of each luxury NFT item and
                other virtual assets selected for the ALTAVA Market;
              </li>
              <li>
                Delicately designed ‘tokenomics’ that prevents depreciation of
                TAVA tokens giving a stable and well protected currency to its
                owners
              </li>
            </ul>
          </div>
          <div className="grey-div">
            <p>
              We believe that exclusivity and rarity protects the value of
              luxury; TAVA will play out its role on the marketplace as a
              safeguard against the loss of value.
            </p>
            <ul>
              <li>
                TAVA tokens will be distributed to buyers and sellers who have
                been active on the ALTAVA Market during the month. Both buyers
                and sellers will equally receive 50% of the distributed amount,
                and the token will be extracted from the ecosystem.
              </li>
              <li>
                Every quarter, we will burn TAVA tokens from 30% of our profits
                that are earned at the ALTAVA market.
              </li>
            </ul>
          </div>
          <p>
            The TAVA token will also be used as a means of incentives to users
            who have actively added value to the ALTAVA Market . Megan Kaspar, a
            member of the Red DAO and managing director of crypto investment
            firm Magnetic is clear that digital NFT fashion includes potential
            global revenues at least doubling in the next two decades: “
            [That’s] due to the digitization of fashion along with revolutionary
            new business models naturally emerging through the process. We
            anticipate Digital Fashion as a sector in the crypto asset class to
            become one of the largest.”
          </p>
          <p>5.2 Ecosystem</p>
          <div className="eco-grid">
            <div className="eco-div">
              <div className="icon-div">
                <img src="/logo-small.png" alt="" />
                <h2>ALTAVA WoY</h2>
              </div>
              <p>
                NFT utility GameFi (play to earn), Social-Fi (Adnetwork)
                Branded, Entertainment World
              </p>
            </div>
            <div className="eco-div">
              <div className="icon-div">
                <img src="/home.png" alt="" />
                <h2>ALTAVA Market</h2>
              </div>
              <p>
                Luxury Brand NFT & Land sale Share 30% of profit (Token Burn)
                Initial users reward
              </p>
            </div>
            <div className="eco-div">
              <div className="icon-div">
                <img src="/settings.png" alt="" />
                <h2>ALTAVA Circle</h2>
              </div>
              <p>User create NFTs (C2E) to sell Made in Virtual Project</p>
            </div>
            <div className="eco-div">
              <div className="icon-div">
                <img src="/square.png" alt="" />
                <h2>ALTAVA Hub</h2>
              </div>
              <p>Link to DEX or CEX TAVA token staking & reward NFT Staking</p>
            </div>
          </div>
          <img src="/about-img.png" className="about-img" alt="" />
          <p>
            Red DAO was a purchaser of NFTs in the D&G X UNXD collection
            launched in October 2021
            https://www.glossy.co/fashion/what-makes-the-dg-nft-different-from-the-rest/?
          </p>
          <button>More About Altava</button>
        </div>
      </div>
    </>
  );
};

export default About;
