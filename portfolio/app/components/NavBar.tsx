"use client"; 

import Link from 'next/link';
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from './LanguageSwitcher';
import {useLocale, useTranslations} from 'next-intl';
import { link } from 'fs';

const NavBar = () => {
    const locale = useLocale();

    const t = useTranslations('NavBar');
    const [isOpen, setisOpen] = useState(false);
    const toggleMenu = () => setisOpen(!isOpen);

    const links = [
      {
        type:"Internal",
        id: 2,
        link: "/about",
        name: t('about'),
      },{
        id: 3,
        type:"External",
        link: "https://wzd38nj5teerpxza.public.blob.vercel-storage.com/Arnaud%20lalande.pdf",
        name: t('resume'),
      },{
        id: 4,
        type:"External",
        link: "https://chachamaru.itch.io/",
        name: "Itch.io",
      },
      {
        id: 5,
        type:"Internal",
        link: "/experience",
        name: t('experience'),
      },
      {
        id: 6,
        type:"Internal",
        link: "/games",
        name: t('games'),
      },
      {
        id: 7,
        type:"Internal",
        link: "/mobygamesapi",
        name: t('mobygames'),
      },
    ];

  return (
    <nav className="sticky flex flex-row justify-between items-center w-full h-16 px-4 text-white bg-black nav z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2 hover:scale-105">
          <Link
            className="link-underline link-underline-black"
            href="/"
          >
            {t('title')}
          </Link>
        </h1>
      </div>
      
       {/* Desktop Menu Link */}
      <ul className="hidden md:flex">
        {links.map(({ id, link, name, type }) => (
          <li
          key={id}
          className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            {type == "External" ? (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            ) : (
              <Link
                key={name}
                href={link}
               >
                {name} -{link}-
              </Link>
            )}
          </li>
        ))}
          <li
            key={links.length+1}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <LanguageSwitcher defaultValue={locale}/>
          </li>
      </ul>

         {/* Mobile Menu Button */}
      <div className="sm:hidden flex justify-between items-center">
        <span className="font-bold text-lg">Menu</span>
        {/* // className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden" */}
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-black to-gray-800 text-gray-500 bg-opacity-90 flex items-center justify-center z-50">
          <ul className="flex flex-col items-center gap-8">
          {/* <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"> */}
            {links.map(({ id, link, name, type }) => (
              <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {type == "External" ? (
                  <a onClick={toggleMenu}
                  key={name}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  {name}
                </a>
              ) : (
                <Link onClick={toggleMenu}
                key={name}
                href={link}
                >
                  {name}
                </Link>
              )}
              </li>
            ))}
            <li
              key={links.length+1}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
              <LanguageSwitcher defaultValue={locale}/>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;