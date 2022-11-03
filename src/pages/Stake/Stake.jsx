import "./Stake.css";

import { Link } from "react-router-dom";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { useState } from "react";
import WaitModal from "../../components/WaitModal/WaitModal";

const Stake = () => {
  const [percentSlider, setPercentSlider] = useState(0);
  const [duration, setDuration] = useState(30);
  const [pollSlider1, setPollSlider1] = useState(0);
  const [pollSlider2, setPollSlider2] = useState(0);
  const [pollSlider3, setPollSlider3] = useState(0);
  const [isStaked, setIsStaked] = useState(true);
  return (
    <div className="stake-page">
      {/* <WaitModal /> */}
      <div className="location">
        <Link to={"/"}>Home</Link>
        <span>/</span>
        <p>Lock Staking</p>
      </div>
      <div className="bottom-stake-page">
        <div className="left-stake-page">
          <h2>Lock Tava</h2>
          <h3>Tava to Lock</h3>
          <div className="stake-row">
            <div className="lock-cont">
              {isStaked ? (
                <div className="black-stake-box flex-bet">
                  <div>
                    <h2>Bull NFT</h2>
                    <img src="/logo.png" alt="" />
                  </div>
                  <img src="/small-nft.png" alt="" />
                </div>
              ) : (
                <div className="black-stake-box">
                  <div className="price-box">
                    <div className="input-price">
                      <img src="/logo.png" alt="" />
                      <input type="text" placeholder="100.516799075006" />
                    </div>
                    <h4>~ 10.215 USD</h4>
                  </div>
                  <p>Balance: 152.2153213554353</p>
                </div>
              )}
              {isStaked ? (
                <></>
              ) : (
                <div className="black-stake-box">
                  <div className="range-slider">
                    <Slider
                      onChange={(value) => {
                        setPercentSlider(value);
                      }}
                      min={0}
                      tooltip={false}
                      max={100}
                      value={percentSlider}
                    />
                  </div>
                  <div className="labels">
                    <p>25%</p>
                    <p>50%</p>
                    <p>75%</p>
                    <p>Max</p>
                  </div>
                </div>
              )}
              <div className="duration-div">
                <h2>Select Duration</h2>
                <div className="btn-div">
                  <button
                    onClick={() => setDuration(30)}
                    className={`purple-btn ${
                      duration === 30 ? "" : "disabled-duration"
                    }`}
                  >
                    <img src="/timer-pause.svg" alt="" />
                    30 Days
                  </button>
                  <button
                    onClick={() => setDuration(60)}
                    className={`purple-btn ${
                      duration === 60 ? "" : "disabled-duration"
                    }`}
                  >
                    <img src="/timer-pause.svg" alt="" />
                    60 Days
                  </button>
                  <button
                    onClick={() => setDuration(90)}
                    className={`purple-btn ${
                      duration === 90 ? "" : "disabled-duration"
                    }`}
                  >
                    <img src="/timer-pause.svg" alt="" />
                    90 Days
                  </button>
                </div>
              </div>
              {isStaked ? (
                <>
                  <div className="black-stake-box">
                    <div className="row-lock">
                      <p>
                        Tava to LOCK <br /> 30,000
                      </p>
                      <p>$205</p>
                    </div>
                    <p className="min-req">Minimum required amount: 30,000</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="boost-box poll-box">
                <div className="poll-header">
                  <h2>Booster Option</h2>
                  <img src="/chart-square.svg" alt="" />
                </div>
                <div className="flex">
                  <p>NFT Stake</p>
                  <h6>0</h6>
                </div>
                <div className="flex">
                  <p>Boosted Minimum TAVA To Lock</p>
                  <h6>0</h6>
                </div>

                <div className="note">
                  NOTE: Please consider to stake your Second skin NFT to boost
                  your interest rate.
                </div>
                <button className="white-border">
                  Purchase Second Skin NFT on Opensea
                </button>
                {!isStaked && (
                  <button className="white-border">
                    Stake Your Altava Second Skin NFT(s)
                  </button>
                )}
              </div>
              <button
                onClick={() => {
                  setIsStaked((prev) => !prev);
                }}
                className="purple-btn"
              >
                Staked
              </button>
              <div className="black-stake-box">
                <select>
                  <option value="Extend Duration">Extend Duration</option>
                  <option value="100">100 Days</option>
                  <option value="200">200 Days</option>
                  <option value="300">300 Days</option>
                </select>
              </div>
            </div>
            {isStaked ? (
              <div className="black-stake-box left-side-box">
                <h2>Stake Overview</h2>
                <div className="flex">
                  <p>Tava to be Blocked</p>
                  <h6>100.516</h6>
                </div>
                <div className="flex">
                  <p>Start date</p>
                  <h6>Aug 7th, 2022</h6>
                </div>
                <div className="flex">
                  <p>Duration</p>
                  <h6>30 Day</h6>
                </div>
                <div className="flex">
                  <p>Total Staked</p>
                  <h6>30,250</h6>
                </div>
                <div className="flex">
                  <p>Total Minted</p>
                  <h6>+2.92%</h6>
                </div>
                <div className="flex">
                  <p>Unlock On</p>
                  <h6>Sep 7 th, 2022 11:50</h6>
                </div>
                <div className="flex">
                  <p>Contract Address</p>
                  <h6>Lorem</h6>
                </div>
              </div>
            ) : (
              <div className="black-stake-box left-side-box">
                <h2>Lock Overview</h2>
                <div className="flex">
                  <p>Tava to be Blocked</p>
                  <h6>100.516</h6>
                </div>
                <div className="flex">
                  <p>Start date</p>
                  <h6>Aug 7th, 2022</h6>
                </div>
                <div className="flex">
                  <p>Duration</p>
                  <h6>30 Day</h6>
                </div>
                <div className="flex">
                  <p>NFT Staked</p>
                  <h6>3</h6>
                </div>
                <div className="flex">
                  <p>Yield Boost</p>
                  <h6>+2.92%</h6>
                </div>
                <div className="flex">
                  <p>Unlock On</p>
                  <h6>Sep 7 th, 2022 11:50</h6>
                </div>
                <div className="flex">
                  <p>Expected Roi</p>
                  <h6>$1000</h6>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="right-stake-page">
          <div className="poll-box">
            <div className="poll-header">
              <h2>Poll Sizes</h2>
              <img src="/empty-wallet-tick.svg" alt="" />
            </div>
            <div className="slider-div">
              <div>
                <p>90 Days</p>
                <h2>{pollSlider1}%</h2>
              </div>
              <div className="range-slider">
                <Slider
                  onChange={(value) => {
                    setPollSlider1(value);
                  }}
                  min={0}
                  tooltip={false}
                  max={100}
                  value={pollSlider1}
                />
              </div>
              <p>100.000 ERN</p>
            </div>
            <div className="slider-div">
              <div>
                <p>90 Days</p>
                <h2>{pollSlider2}%</h2>
              </div>
              <div className="range-slider">
                <Slider
                  onChange={(value) => {
                    setPollSlider2(value);
                  }}
                  min={0}
                  tooltip={false}
                  max={100}
                  value={pollSlider2}
                />
              </div>
              <p>100.000 ERN</p>
            </div>
            <div className="slider-div">
              <div>
                <p>90 Days</p>
                <h2>{pollSlider3}%</h2>
              </div>
              <div className="range-slider">
                <Slider
                  onChange={(value) => {
                    setPollSlider3(value);
                  }}
                  min={0}
                  tooltip={false}
                  max={100}
                  value={pollSlider3}
                />
              </div>
              <p>100.000 ERN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
