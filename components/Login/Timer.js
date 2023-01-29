import React, { useRef, useState, useEffect } from "react";

function Timer({ setOtpSented }) {
  const Ref = useRef(null);
  const [timer, setTimer] = useState(45);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    if (timer == 1) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [timer, isActive]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          color: "#10847E",
          fontWeight: "bold",
          marginTop: "10px",
          cursor: "pointer",
        }}
        onClick={() => setOtpSented(true)}
      >
        Change Number
      </span>
      {timer == 0 ? (
        <span
          style={{
            color: "#10847E",
            fontWeight: "bold",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Resend OTP
        </span>
      ) : (
        <span style={{ color: "grey", marginTop: "10px" }}>
          Resend OTP in {timer}
        </span>
      )}
    </div>
  );
}

export default Timer;