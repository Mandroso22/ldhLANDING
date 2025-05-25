"use client";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="fixed w-full flex justify-between items-center h-[55px] text-white bg-black/10 backdrop-blur-[1px] z-10 shadow-[1px_1px_10px_rgba(0,0,0,0.03)] px-4">
        <h2 className="font-['Playfair_Display'] mr-0.5 text-white/80 text-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] uppercase flex items-center ml-4 cursor-pointer">
          <a href="/">La douce heure</a>
        </h2>

        {/* Icône burger visible uniquement sur mobile */}
        <button
          className="block invert items-center justify-center md:hidden"
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
        >
          <img src="/img/MENU.png" alt="Menu" className="w-6 h-6" />
        </button>

        {/* Liens visibles uniquement sur desktop */}
        <ul className="hidden md:flex list-none gap-8 mr-16 font-['Space_Grotesk'] text-[1.25rem] box-border transition-transform duration-300 ease-in-out z-[11]">
          <li className="cursor-pointer">
            <a
              href="#"
              className="text-base font-['Playfair_Display'] text-shadow-[1px_1px_2px_rgba(0,0,0,0.3)] font-medium text-white/80 no-underline"
            >
              Menu
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="#"
              className="text-base font-['Playfair_Display'] text-shadow-[1px_1px_2px_rgba(0,0,0,0.3)] font-medium text-white/80 no-underline"
            >
              À propos
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="./contact"
              className="text-base font-['Playfair_Display'] text-shadow-[1px_1px_2px_rgba(0,0,0,0.3)] font-medium text-white/80 no-underline"
            >
              Contacter
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="https://www.instagram.com/la.douce.heure017/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="/img/ig.png"
                alt="instagram"
                className="h-5 w-5 transition-all duration-300 hover:brightness-0 hover:invert"
                width={20}
              />
            </a>
          </li>
        </ul>
      </nav>

      {/* Burger Menu déroulant sur mobile */}
      <div
        className={`fixed top-[55px] w-full bg-black/20 backdrop-blur-[15px] overflow-auto rounded-lg transition-[height] duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] z-[11] ${
          isMenuOpen ? "h-auto" : "h-0"
        } md:hidden`}
      >
        <ul className="list-none flex flex-col gap-5 p-4">
          <li className="text-base p-4 flex items-center">
            <a
              href="#"
              className="text-white/80 font-['Playfair_Display'] no-underline text-[1.125rem] text-center w-full"
            >
              Menu
            </a>
          </li>
          <li className="text-base p-4 flex items-center">
            <a
              href="#"
              className="text-white/80 font-['Playfair_Display'] no-underline text-[1.125rem] text-center w-full"
            >
              À propos
            </a>
          </li>
          <li className="text-base p-4 flex items-center">
            <a
              href="./contact"
              className="text-white/80 font-['Playfair_Display'] no-underline text-[1.125rem] text-center w-full"
            >
              Contacter
            </a>
          </li>
          <li className="p-2">
            <img
              src="/img/ig.png"
              alt="instagram"
              className="hover:filter hover:brightness-0 hover:invert transition-all duration-300"
              width={30}
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
