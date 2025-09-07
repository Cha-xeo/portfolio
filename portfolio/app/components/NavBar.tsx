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
    const [nav, setNav] = useState(false);

    const links = [
      {
        id: 2,
        link: "/about",
        name: t('about'),
      },{
        id: 3,
        link: "https://wzd38nj5teerpxza.public.blob.vercel-storage.com/Arnaud%20lalande.pdf",
        name: t('resume'),
        target: "_blank",
      },{
        id: 4,
        link: "https://chachamaru.itch.io/",
        name: "Itch.io",
        target: "_blank",
      },
      {
        id: 5,
        link: "/experience",
        name: t('experience'),
      },
      {
        id: 6,
        link: "/games",
        name: t('games'),
      },
      {
        id: 7,
        link: "/mobygamesapi",
        name: t('mobygames'),
      },
    ];

  return (
    <nav className="sticky flex flex-row justify-between items-center w-full h-16 px-4 text-white bg-black nav z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2 hover:scale-105">
          <a
            className="link-underline link-underline-black"
            href="/"
            rel="noreferrer"
          >
            {t('title')}
          </a>
        </h1>
      </div>
      
      <ul className="hidden md:flex">
        {links.map(({ id, link, name, target }) => (
          <li
          key={id}
          className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            {/* <Link href={{pathname:`${link}`}} target={id === 3  || id === 4 ? "_blank": ""}>{name}</Link> */}
            <Link href={{pathname:`${link}`}} target={id === 3  || id === 4 ? "_blank": ""} rel={id === 3  || id === 4 ? "noopener noreferrer": ""}>{name}</Link>
          </li>
        ))}
          <li
            key={links.length+1}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <LanguageSwitcher defaultValue={locale}/>
          </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={{pathname:`/${link}`}}>
                {name}
              </Link>
            </li>
          ))}
          <li
            key={links.length+1}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <LanguageSwitcher defaultValue={locale}/>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;