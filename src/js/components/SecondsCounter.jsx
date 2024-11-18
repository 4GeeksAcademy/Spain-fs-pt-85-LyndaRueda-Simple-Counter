import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const SecondsCounter = ({ seconds }) => {
  const formatNumber = (num) => String(num).padStart(6, "0");

  return (
    <div style={styles.container}>
      <div style={styles.icon}>
        <FontAwesomeIcon icon={faClock} />
      </div>
      {formatNumber(seconds).split("").map((digit, index) => (
        <div key={index} style={styles.digit}>
          {digit}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
    fontSize: "2rem",
  },
  icon: {
    padding: "0.5rem",
    backgroundColor: "#333",
    borderRadius: "5px",
  },
  digit: {
    margin: "0 5px",
    padding: "10px 15px",
    backgroundColor: "#222",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};

export default SecondsCounter;
