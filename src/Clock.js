import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer1D = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return function cleanup(){
      clearInterval(timer1D);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
