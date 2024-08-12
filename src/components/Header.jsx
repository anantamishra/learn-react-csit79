import React from "react";
import logo from "../assets/staricon.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex w-full justify-between shadow px-20 py-5">
      {/* <img src={logo} alt="" /> */}
      <h2 className="font-bold text-xl">Ananta Mishra</h2>
      <ul className="flex gap-5 text-lg font-semibold">
        <li>Home</li>
        <li>About</li>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <li>Services</li>
      </ul>
      <button className="font-semibold text-lg bg-red-500 px-5 py-2 rounded-full text-white">
        Contact Me
      </button>
    </div>
  );
}
