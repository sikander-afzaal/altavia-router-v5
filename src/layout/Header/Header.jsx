import "./Header.css";
import { useEffect, useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (openHeader) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "visible";
    }
  }, [openHeader]);

  return (
    <div className="container header-cont">
      <div
        onClick={() => setOpenHeader(false)}
        className={`mob-nav ${openHeader ? "overlay" : ""}`}
      ></div>
      <header>
        <Link to={"/"}>
          <img src="/logo.png" alt="" />
        </Link>
        <nav className={`${openHeader ? "open-nav" : ""}`}>
          <Link
            onClick={() => setOpenHeader(false)}
            className="active-link"
            to={"/"}
          >
            Home
          </Link>
          <Link onClick={() => setOpenHeader(false)} to={"/"}>
            Support
          </Link>
          <Link onClick={() => setOpenHeader(false)} to={"/stake"}>
            Staked
          </Link>
          <Link onClick={() => setOpenHeader(false)} to={"/about"}>
            About
          </Link>
          <Link onClick={() => setOpenHeader(false)} to={"/"}>
            Altava
          </Link>
          <div
            onClick={() => {
              history.push("/connect");
              setOpenHeader(false);
            }}
            className="cta-btn mob-nav"
          >
            Connect Wallet
          </div>
        </nav>
        <FontAwesomeIcon
          onClick={() => {
            setOpenHeader((prev) => !prev);
          }}
          icon={openHeader ? faXmark : faBars}
          className="mob-nav"
        />
        <button
          onClick={() => {
            history.push("/connect");
          }}
          className="cta-btn desk-nav"
        >
          Connect Wallet
        </button>
      </header>
    </div>
  );
};

export default Header;
