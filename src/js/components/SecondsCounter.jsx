import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function SecondsCounter(props) {
  function formatNumber(num) {
    return String(num).padStart(6, "0");
  }

  function getContainerStyle() {
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "black",
      color: "white",
      padding: "80px",
      borderRadius: "10px",
      fontFamily: "Arial, sans-serif",
      fontSize: "10rem",
    };
  }

  function getIconStyle() {
    return {
      padding: "0.5rem",
      backgroundColor: "#333",
      borderRadius: "5px",
    };
  }

  function getDigitStyle() {
    return {
      margin: "0 5px",
      padding: "10px 15px",
      backgroundColor: "#222",
      borderRadius: "5px",
      fontWeight: "bold",
    };
  }

  return (
    <div style={getContainerStyle()}>
      <div style={getIconStyle()}>
        <FontAwesomeIcon icon={faClock} />
      </div>
      {formatNumber(props.seconds).split("").map((digit, index) => (
        <div key={index} style={getDigitStyle()}>
          {digit}
        </div>
      ))}
    </div>
  );
}

export default SecondsCounter;
