import React from "react";

export default function Navbar() {
  return (
    <nav className="">
      <ul className="flex flex-row  py-4 px-7 items-center justify-between">
        <li className=" font-extrabold  tracking-[.1em] text-[30px]">MyusiX</li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z" />
          </svg>
        </li>
      </ul>
      <ul className="hidden">
        <li>Home</li>
        <li>Playlist</li>
      </ul>
    </nav>
  );
}
