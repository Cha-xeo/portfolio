"use client"; 

import Link from 'next/link';
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
      {
        id: 2,
        link: "about",
      },
      {
        id: 4,
        link: "experience",
      },
      {
        id: 6,
        link: "games",
      },
      {
        id: 7,
        link: "gamesapi",
      },
    ];
  return (
    <nav className="sticky flex justify-between items-center w-full h-16 px-4 text-white bg-black nav z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href="/"
            rel="noreferrer"
          >
            Home
          </a>
        </h1>
      </div>
      {/* <button id="theme-toggle" className="p-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white">
        Toggle Theme
      </button> */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={{pathname:`/${link}`}}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={{pathname:`/${link}`}}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;