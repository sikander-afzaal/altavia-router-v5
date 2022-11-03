import "./FaqTab.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FaqTab = ({ question, answer }) => {
  const [activeTab, setActiveTab] = useState(false);
  return (
    <div className="faq-tab">
      <div onClick={() => setActiveTab((prev) => !prev)} className="faq-btn">
        <h2>{question}</h2>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className={`faq-answer ${activeTab ? "active-answer" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqTab;
