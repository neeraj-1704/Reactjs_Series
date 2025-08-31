import React, { useEffect, useRef, useState } from "react";

function App() {
  const [start, setStart] = useState(0);
  const [lap, setLap] = useState([]);
  const timeRef = useRef(null);

  const startClock = () => {
    if (timeRef.current) return; // ✅ prevent multiple intervals
    timeRef.current = setInterval(() => {
      setStart((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    // ✅ Cleanup interval when component unmounts
    return () => clearInterval(timeRef.current);
  }, []);

  const stopClock = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const resetClock = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
    setStart(0);
    setLap([]); // ✅ fixed
  };

  const LapTime = () => {
    setLap((prev) => [...prev, start]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>⏱ Stop Watch</h1>
      <h1 style={{ fontSize: "2rem" }}>{start}s</h1>

      <div style={{ margin: "1rem" }}>
        <button onClick={startClock}>Start</button>{" "}
        <button onClick={timeRef.current ? stopClock : startClock}>
          {timeRef.current ? "Stop" : "Resume"}
        </button>{" "}
        <button onClick={resetClock}>Reset</button>{" "}
        <button onClick={LapTime}>Lap</button>
      </div>

      <h2>🏁 Lap Times</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {lap.map((value, index) => (
          <li key={index}>
            Lap {index + 1}: {value}s
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
