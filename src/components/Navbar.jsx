import React from "react";
import logo from "../assets/logo.jpeg";
export default function Navbar() {
  return (
    <nav className="bg-black flex h-20 top-0 w-full relative">
      <img src={logo} alt="logo" className="w-10 h-10 m-4" />
      <h1 className="text-blue text-3xl font-extrabold mt-4">POKOPLAN</h1>
      <a
        href="#"
        class="bg-gray-900 text-white px-3 py-2 rounded-md text-base m-4 font-medium"
        aria-current="page"
      >
        Dashboard
      </a>
      <a
        href="#"
        class="bg-gray-900 text-white px-3 py-2 rounded-md text-base m-4 font-medium"
        aria-current="page"
      >
        liveStream
      </a>
    </nav>
  );
}
