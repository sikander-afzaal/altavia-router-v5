import {
  faArrowUpFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddModal.css";

const AddModal = ({ closeModal }) => {
  return (
    <>
      <div onClick={() => closeModal(false)} className="overlay"></div>
      <div className="add-nft-modal addNew">
        <FontAwesomeIcon onClick={() => closeModal(false)} icon={faXmark} />
        <h1>Add New</h1>
        <div className="input-div">
          <h3>1. Banner Area</h3>
          <div className="input-row">
            <input type="text" placeholder="Main Message" />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: "20px" }} className="input-div">
            <h3>Upload Logo</h3>
          </div>
          <div className="input-row upload-div">
            <div className="input-div">
              <h3>Logo 1</h3>
              <div className="upload-image">
                <label htmlFor="banner1">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  <p>Upload Image</p>
                </label>
                <input type="file" id="banner1" />
              </div>
            </div>
            <div className="input-div">
              <h3>Logo 2</h3>
              <div className="upload-image">
                <label htmlFor="banner2">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  <p>Upload Image</p>
                </label>
                <input type="file" id="banner2" />
              </div>
            </div>
          </div>
        </div>

        <div className="color-selector">
          <p>Background Color</p>
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
        <div className="new-nft-msg">
          <img src="/speaker.png" alt="" />
          <div className="input-div">
            <h3>Main Message</h3>
            <div className="speaker-input">
              <input type="text" placeholder="Main Message" />
              <img src="/speaker.png" alt="" />
            </div>
          </div>
          <div className="input-div">
            <h3>Logo 1</h3>
            <div className="upload-image">
              <label htmlFor="banner3">
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                <p>Upload LOGO</p>
              </label>
              <input type="file" id="banner3" />
            </div>
          </div>
          <img src="/arrow-left.png" alt="" />
          <div className="input-div">
            <h3>Logo 2</h3>
            <div className="upload-image">
              <label htmlFor="banner4">
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                <p>Upload LOGO</p>
              </label>
              <input type="file" id="banner4" />
            </div>
          </div>
          <img src="/arrow-right.png" alt="" />
        </div>
        <div className="input-div">
          <h3>2. Banner Area</h3>
          <div className="input-row">
            <input type="text" placeholder="Main Message" />
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ marginBottom: "20px" }} className="input-div">
            <h3>Upload Logo</h3>
          </div>
          <div className="input-row upload-div">
            <div className="input-div">
              <h3>Logo 1</h3>
              <div className="upload-image">
                <label htmlFor="banner5">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  <p>Upload Image</p>
                </label>
                <input type="file" id="banner5" />
              </div>
            </div>
            <div className="input-div">
              <h3>Logo 2</h3>
              <div className="upload-image">
                <label htmlFor="banner6">
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  <p>Upload Image</p>
                </label>
                <input type="file" id="banner6" />
              </div>
            </div>
          </div>
        </div>
        <div className="color-selector">
          <p>Background Color</p>
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
        <div className="new-nft-msg">
          <img src="/speaker.png" alt="" />
          <div className="input-div">
            <h3>Main Message</h3>
            <div className="speaker-input">
              <input type="text" placeholder="Main Message" />
              <img src="/speaker.png" alt="" />
            </div>
          </div>
          <div className="input-div">
            <h3>Logo 1</h3>
            <div className="upload-image">
              <label htmlFor="banner7">
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                <p>Upload LOGO</p>
              </label>
              <input type="file" id="banner7" />
            </div>
          </div>
          <img src="/arrow-left.png" alt="" />
          <div className="input-div">
            <h3>Logo 2</h3>
            <div className="upload-image">
              <label htmlFor="banner8">
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
                <p>Upload LOGO</p>
              </label>
              <input type="file" id="banner8" />
            </div>
          </div>
          <img src="/arrow-right.png" alt="" />
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

export default AddModal;
