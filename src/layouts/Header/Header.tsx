"use client";
import React, { useEffect, useState } from "react";
import { MenuIcon, CloseIcon } from "@/libs/@heroicons/page";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <nav className="md:mt-12 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="font-bold md:text-5xl text-4xl">W.</h1>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-black focus:outline-none"
        >
          <MenuIcon className="h-10 w-10" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-500 rounded-sm md:border-0 md:hover:text-red-400 md:p-0 "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-500 rounded-sm md:border-0 md:hover:text-red-400 md:p-0 "
              >
                New
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-500 rounded-sm md:border-0 md:hover:text-red-400 md:p-0 "
              >
                Popular
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-500 rounded-sm md:border-0 md:hover:text-red-400 md:p-0 "
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-500 rounded-sm md:border-0 md:hover:text-red-400 md:p-0 "
              >
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 w-2/3 h-full bg-[#FAF9F6] z-50 shadow-lg p-6">
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-black focus:outline-none"
              >
                <CloseIcon className="w-10 h-10" />
              </button>
            </div>
            <ul className="space-y-6 text-xl text-left mt-12">
              {["Home", "New", "Popular", "Trending", "Categories"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`cursor-pointer ${
                        activeItem === item ? "text-red-400" : "text-black"
                      }`}
                      onClick={() => setActiveItem(item)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
