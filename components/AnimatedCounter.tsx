"use client";
import CountUp from "react-countup";

function AnimatedCounter({ amount }: Readonly<{ amount: number }>) {
  return (
    <div>
      <CountUp decimal="," end={amount} decimals={2} duration={2} /> Kr
    </div>
  );
}

export default AnimatedCounter;
