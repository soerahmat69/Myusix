import React, { useState, useRef, useEffect } from "react";
import m_test from "./wish_your.mp3";
import { ControlMenuOne } from "./ControlMenu";

export default function MusicPlay() {
  const [pause, setPause] = useState(false);
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const updateTime = () => {
    const audioDuration = audioRef.current.duration;
    if (!isNaN(audioDuration)) {
      setDuration(audioDuration);
    }
    setCurrentTime(audioRef.current.currentTime);
  };
  const handleEnded = () => {
    setPause(false);
    setCurrentTime(0); // Atur currentTime kembali ke 0 setelah lagu selesai
  };

  useEffect(() => {
    updateTime();
  }, []);

  const handlePlay = () => {
    if (pause) {
      setPause(false);
      audioRef.current.pause();
      audioRef.current.src = m_test;
      audioRef.current.currentTime = currentTime;
    } else {
      setPause(true);
      audioRef.current.play();
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 w-full">
      <div className="flex py-[30px] ring-1 ring-black items-center justify-between  px-9 ">
        <div>
          <ControlMenuOne
            handlePlayPause={handlePlay}
            animPlayPause={pause}
            duration={!isNaN(duration) ? duration : null}
            updateTime={updateTime}
            currentTime={currentTime}
          />
        </div>
        <div>
          <ul>
            <li>
              <audio
                ref={audioRef}
                onTimeUpdate={updateTime}
                className="hidden"
                onEnded={handleEnded}
                controls
              >
                <source src={m_test} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-3 flex-row">
            <li>Volume</li>
            <li>Repeat</li>
            <li>CLOSE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
