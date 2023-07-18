import React from "react";
import fotoku from "./1686247356701.jpg";
import foto2 from "./figure2.jpeg";
export default function Card() {
  return (
    <div className="w-full   flex flex-row  flex-wrap-reverse gap-7 px-32">
      <card className="">
        <figure
          style={{ backgroundImage: `url(${fotoku})` }}
          className="  w-[270px] bg-cover bg-center  rounded-md h-[185px]"
        ></figure>
        <div className="py-2">
          <h1 className=" font-semibold   text-[#E9E8E8]">Wish Your</h1>
          <h1 className=" font-semibold    text-zinc-400">
            JOKOSTARZ - 155M views
          </h1>
        </div>
      </card>
      <card className="min-w-min">
        <figure
          style={{ backgroundImage: `url(${foto2})` }}
          className="  w-[270px] bg-cover bg-center  rounded-md h-[185px]"
        ></figure>
        <div className="py-2">
          <h1 className=" font-semibold   text-[#E9E8E8]">JASON MIRAZ</h1>
          <h1 className=" font-semibold    text-zinc-400">
            JOKOSTARZ - 155M views
          </h1>
        </div>
      </card>
    </div>
  );
}
