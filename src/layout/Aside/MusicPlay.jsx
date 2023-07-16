import React, { useState, useRef } from "react";
import m_test from "./wish_your.mp3"

export default function MusicPlay() {
  // const [play, SetPlay] = useState();
  const audioTimeRef = useRef(null);

  const handlePlay = (e) => {
    let x = document.getElementById("x")
    x.pause()
    x.src = m_test
    x.currentTime = 2
  };

  const updateTime=(e)=>{
  audioTimeRef.current = e.target.duration
  console.log()  
}
  const handlePause = (e) => {
    let x = document.getElementById("x")
    x.play()
    // x.src = m_test
  
  };
  return (
    <div className="fixed inset-x-0 bottom-0 w-full">
      <div className="flex py-[30px] ring-1 ring-black items-center justify-between  px-9 ">
        <div>
          <ul className="flex  gap-3 flex-row">
            <li onClick={handlePlay}>Prev</li>
            <li onClick={handlePause}>Pause</li>
            <li>Next</li>
            <li>02:11/03:20</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>      
              <audio id="x" onTimeUpdate={(e)=>updateTime(e)} className="hidden" controls  src={m_test} />
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
