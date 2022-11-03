import "./styles/Info.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Info = () => {
  return (
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
                Here SAND is available you <img src="/slide-icon.png" alt="" />{" "}
                <img src="/arrow-left" alt="" />{" "}
                <img src="/small-logo.png" alt="" />
                Altava
              </p>
            </SplideSlide>
            <SplideSlide>
              <p>
                Here SAND is available you <img src="/slide-icon.png" alt="" />{" "}
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
                Here SAND is available you <img src="/slide-icon.png" alt="" />{" "}
                <img src="/arrow-left" alt="" />{" "}
                <img src="/small-logo.png" alt="" />
                Altava
              </p>
            </SplideSlide>
            <SplideSlide>
              <p>
                Here SAND is available you <img src="/slide-icon.png" alt="" />{" "}
                <img src="/arrow-left" alt="" />{" "}
                <img src="/small-logo.png" alt="" />
                Altava
              </p>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Info;
