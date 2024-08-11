import React from "react";

export default function Header() {
  return (
    <div className="flex w-full justify-between shadow px-20 py-5">
      <h2 className="font-bold text-xl">Ananta Mishra</h2>
      <ul className="flex gap-5 text-lg">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Services</li>
      </ul>
      <button className="font-semibold text-lg bg-red-500 px-5 py-2 rounded-full text-white">
        Contact Me
      </button>
    </div>
  );
}
