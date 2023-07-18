import React, { useState, useEffect } from "react";

export function ControlMenuOne({
  handlePlayPause,
  handlePrev,
  handleNext,
  animPlayPause,
  duration,
  currentTime
}) {
  const [rateDuration, setRateDuration] = useState("00:00");
  const [rateCurr, setRateCurr] = useState("00:00");

  useEffect(() => {
    updateTime(duration);
    updateTimeCurr(currentTime)
  }, [duration,currentTime]);

  const updateTime = (durations) => {
    const durationInSeconds = Math.floor(durations);
    const minutes = Math.floor(durationInSeconds / 60).toString().padStart(2, "0");
    const seconds = (durationInSeconds % 60).toString().padStart(2, "0");
    setRateDuration(`${minutes}:${seconds}`);
  };
  const updateTimeCurr = (durations) => {
    const durationInSeconds = Math.floor(durations);
    const minutes = Math.floor(durationInSeconds / 60).toString().padStart(2, "0");
    const seconds = (durationInSeconds % 60).toString().padStart(2, "0");
    setRateCurr(`${minutes}:${seconds}`);
  };

  function PlayPause() {
    if (animPlayPause || animPlayPause === null) {
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 117 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="178" fill="#E9E8E8" />
          <rect x="87" width="30" height="178" fill="#E9E8E8" />
        </svg>
      );
    } else {
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 162 208"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.51783 102.489L121.319 15.4857L118.69 193.001L1.51783 102.489Z"
            fill="#D9D9D9"
          />
        </svg>
      );
    }
  }

  return (
    <ul className="flex items-center gap-7 flex-row">
      <li className="" onClick={handlePrev}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 144 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="5.73344" width="19" height="89" fill="#E9E8E8" />
          <path
            d="M19.1095 50.5019L112.003 6.79734L112.193 93.8009L19.1095 50.5019Z"
            fill="#E9E8E8"
          />
        </svg>
      </li>
      <li className="cursor-pointer" onClick={handlePlayPause}>
        {PlayPause()}
      </li>
      <li onClick={handleNext}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 144 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="19"
            height="89"
            transform="matrix(-1 0 0 1 143.204 5.73344)"
            fill="#E9E8E8"
          />
          <path
            d="M124.094 50.5019L31.2005 6.79734L31.0108 93.8009L124.094 50.5019Z"
            fill="#E9E8E8"
          />
        </svg>
      </li>
      <li className="text-[#E9E8E8]">{rateCurr}/{rateDuration}</li>
    </ul>
  );
}
