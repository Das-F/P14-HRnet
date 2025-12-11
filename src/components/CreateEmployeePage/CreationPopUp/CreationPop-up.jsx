import React from "react";
import "./CreationPopUp.css";

const CreationPopUp = ({ onClose }) => {
  return (
    <div className="cp-overlay" onClick={onClose}>
      <div className="cp-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cp-close" onClick={onClose} aria-label="Close">
          <span className="cp-close-icon">×</span>
        </button>
        <div className="cp-content">
          <p>Employee Created !</p>
        </div>
      </div>
    </div>
  );
};

export default CreationPopUp;
