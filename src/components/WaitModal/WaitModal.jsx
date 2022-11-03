import "./WaitModal.css";
import { useEffect, useState } from "react";

const WaitModal = () => {
  const [timer, setTimer] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 3000);
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <div className="waitModal">
        {timer ? (
          <>
            <img src="/check.png" alt="" />
            <h2>Lock Tava</h2>
            <p>
              NOTE: Once your TAVA is locked, you will not be able to cancel
              before the end of unlock date.
            </p>
            <div className="btn-div">
              <button className="white-border">Never Mind</button>
              <button className="purple-btn">Finish</button>
            </div>
          </>
        ) : (
          <>
            <img src="/sand-clock 1.png" alt="" />
            <h2>Waiting</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default WaitModal;
