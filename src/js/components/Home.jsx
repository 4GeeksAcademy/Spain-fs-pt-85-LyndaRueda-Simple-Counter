import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";

function Home() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getPageStyle() {
    return {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#fff;",
    };
  }

  return (
    <div style={getPageStyle()}>
      <SecondsCounter seconds={seconds} />
    </div>
  );
}

export default Home;
