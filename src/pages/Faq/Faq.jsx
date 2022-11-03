import "./Faq.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import FaqTab from "../../components/FaqTab/FaqTab";

const Faq = () => {
  const FAQS = [
    {
      question: "What is Fixed Staking?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question: "What is the APR for Fixed Staking?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question: "How does TAVA staking platform work?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question: "When can I claim the staked amount?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question: "Does the APR fluctuate?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question: "What are the staking durations?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question:
        "Can I unlock the staked tokens before the end date of the staking pool?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question: "What are the rewards for the staked TAVA tokens?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question:
        "What is the booster option? How much percentage will the booster bring?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question: "How many Altava Second Skin NFTs can I use to boost my APR?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question:
        "Are my Altava Second Skin NFTs really staked and taken into custody? ",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question: "How can I get my rewards?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
    {
      question: "Can I unstake in advance?",
      answer:
        "Fixed staking is a process of locking your TAVA tokens in the smart contract to support the operations of a blockchain network in order to receive rewards. Stake TAVA and get quality project tokens and NFTs.",
    },
  ];
  return (
    <div className="container">
      <div className="faq">
        <div className="hero">
          <div className="img-wrapper">
            <img src="/hero.png" alt="" />
          </div>
          <div className="right-hero">
            <h1>
              STAKE <br /> TAVA & WIN
            </h1>
            <p>
              Just stake TAVA or Second skin NFT to earn with high APR and low
              risk
            </p>
          </div>
        </div>
        <div className="info">
          <div className="top-info">
            <div className="info-icon">
              <img src="/icon1.svg" alt="" />
              <div className="text-col">
                <h2>1,500</h2>
                <p>NFT Staked</p>
              </div>
            </div>
            <div className="info-icon">
              <img src="/icon2.svg" alt="" />
              <div className="text-col">
                <h2>234K</h2>
                <p>TAVA Staked</p>
              </div>
            </div>
            <div className="info-icon">
              <img src="/icon3.svg" alt="" />
              <div className="text-col">
                <h2>$2M</h2>
                <p>Total Reward</p>
              </div>
            </div>
            <div className="info-icon">
              <img src="/icon4.svg" alt="" />
              <div className="text-col">
                <h2>145.8%</h2>
                <p>MAX APR</p>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <div className="slide-wrap">
              <img src="/speaker.png" alt="" />
              <Splide
                options={{
                  autoWidth: true,
                  perPage: 1,
                  drag: "free",
                  pagination: false,
                  arrows: true,
                  type: "loop",
                  width: "100%",
                  breakpoints: {
                    1181: {
                      perPage: 3,
                    },
                  },
                }}
              >
                <SplideSlide>
                  <p>
                    Here SAND is available you{" "}
                    <img src="/slide-icon.png" alt="" />{" "}
                    <img src="/arrow-left" alt="" />{" "}
                    <img src="/small-logo.png" alt="" />
                    Altava
                  </p>
                </SplideSlide>
                <SplideSlide>
                  <p>
                    Here SAND is available you{" "}
                    <img src="/slide-icon.png" alt="" />{" "}
                    <img src="/arrow-left" alt="" />{" "}
                    <img src="/small-logo.png" alt="" />
                    Altava
                  </p>
                </SplideSlide>
              </Splide>
            </div>
            <div className="slide-wrap">
              <img src="/speaker.png" alt="" />
              <Splide
                options={{
                  autoWidth: true,
                  perPage: 1,
                  drag: "free",
                  pagination: false,
                  arrows: true,
                  type: "loop",
                  width: "100%",
                }}
              >
                <SplideSlide>
                  <p>
                    Here SAND is available you{" "}
                    <img src="/slide-icon.png" alt="" />{" "}
                    <img src="/arrow-left" alt="" />{" "}
                    <img src="/small-logo.png" alt="" />
                    Altava
                  </p>
                </SplideSlide>
                <SplideSlide>
                  <p>
                    Here SAND is available you{" "}
                    <img src="/slide-icon.png" alt="" />{" "}
                    <img src="/arrow-left" alt="" />{" "}
                    <img src="/small-logo.png" alt="" />
                    Altava
                  </p>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
        <div className="faq-cont">
          <h2>FAQs</h2>
          <h1>Frequently asked questions</h1>
          <p>Have questions? We’re here to help.</p>
          <div className="questions-div">
            {FAQS.map((elem, idx) => {
              return <FaqTab key={idx + "faq-tab"} {...elem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
