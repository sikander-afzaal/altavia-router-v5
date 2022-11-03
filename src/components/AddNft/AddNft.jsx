import {
  faArrowUpFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddNft.css";

const AddNft = ({ closeModal }) => {
  return (
    <>
      <div onClick={() => closeModal(false)} className="overlay"></div>
      <div className="add-nft-modal">
        <FontAwesomeIcon onClick={() => closeModal(false)} icon={faXmark} />
        <h1>Add New</h1>
        <div className="input-div">
          <h3>Reward (based on lock period)</h3>
          <div className="input-row">
            <input type="text" placeholder="30 days" />
            <input type="text" placeholder="60 days" />
            <input type="text" placeholder="90 days" />
          </div>
        </div>
        <div className="input-div">
          <h3>Reward (based on number of NFTs staked)</h3>
          <div className="input-row">
            <input type="text" placeholder="1" />
            <input type="text" placeholder="2" />
            <input type="text" placeholder="3" />
          </div>
        </div>
        <div className="flex">
          <div className="input-div">
            <h3>Token Address</h3>
            <input type="text" placeholder="0x" />
          </div>
          <div className="input-div">
            <h3>White Paper</h3>
            <input type="text" placeholder="0x" />
          </div>
        </div>
        <div className="flex">
          <div className="input-div">
            <h3>Owner Address</h3>
            <input type="text" placeholder="0x" />
          </div>
          <div className="input-div">
            <h3>Website</h3>
            <input type="text" placeholder="0x" />
          </div>
        </div>
        <div className="flex">
          <div className="input-div">
            <h3>NFT721 Address</h3>
            <input type="text" placeholder="0x" />
          </div>
          <div className="input-div">
            <h3>Contact email</h3>
            <input type="text" placeholder="0x" />
          </div>
        </div>
        <div className="color-selector">
          <p>Color</p>
          <div className="colors">
            <div className="active-color"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="input-div">
          <h3>Company Detail</h3>
          <textarea placeholder="Company Detail"></textarea>
        </div>
        <div className="input-div">
          <h3>Banner Image</h3>
          <div className="upload-image">
            <label htmlFor="banner">
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
              <p>
                Drag your documents, photos or videos <br /> here to start
                uploading or
                <span>Browse files</span>
              </p>
            </label>
            <input type="file" id="banner" />
          </div>
        </div>
        <div className="btn-div">
          <button onClick={() => closeModal(false)} className="white-border">
            Cancel
          </button>
          <button onClick={() => closeModal(false)} className="purple-btn">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNft;
