import React, { useState } from "react";

function Navbar(): JSX.Element {
  const [activeLink, setActiveLink] = useState("anasayfa");

  const handleClick = (link: any) => {
    setActiveLink(link);
  };
  return (
    <>
      <header className="flex justify-center mt-10">
        <h1 className="py-4 text-4xl">ETKINLIKLER</h1>
      </header>
      <nav className="flex justify-center items-center bg-white py-4">
        <ul className="flex">
          <li>
            <a
              href="#"
              onClick={() => handleClick("anasayfa")}
              className={`block px-4 py-2 text-gray-800 hover:text-red-500 relative ${
                activeLink === "anasayfa" ? "text-red-500" : ""
              }`}
            >
              Anasayfa
              {activeLink === "anasayfa" && (
                <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
              )}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("about")}
              className={`block px-4 py-2 text-gray-800 hover:text-red-500 relative ${
                activeLink === "about" ? "text-red-500" : ""
              }`}
            >
              About
              {activeLink === "about" && (
                <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
              )}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("tiyatro")}
              className={`block px-4 py-2 text-gray-800 hover:text-red-500 relative ${
                activeLink === "tiyatro" ? "text-red-500" : ""
              }`}
            >
              Tiyatro
              {activeLink === "tiyatro" && (
                <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
              )}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("konser")}
              className={`block px-4 py-2 text-gray-800 hover:text-red-500 relative ${
                activeLink === "konser" ? "text-red-500" : ""
              }`}
            >
              Konser
              {activeLink === "konser" && (
                <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
              )}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("standup")}
              className={`block px-4 py-2 text-gray-800 hover:text-red-500 relative ${
                activeLink === "standup" ? "text-red-500" : ""
              }`}
            >
              Standup
              {activeLink === "standup" && (
                <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
              )}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("sinema")}
              className={`block px-4 py-2 text-gray-800 hover:text-red-500 relative ${
                activeLink === "sinema" ? "text-red-500" : ""
              }`}
            >
              Sinema
              {activeLink === "sinema" && (
                <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
              )}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleClick("cocuk")}
              className={`block px-4 py-2 text-gray-800 hover:text-red-500 relative ${
                activeLink === "cocuk" ? "text-red-500" : ""
              }`}
            >
              Cocuk
              {activeLink === "cocuk" && (
                <div className="h-1 bg-red-500 absolute bottom-0 left-0 right-0"></div>
              )}
            </a>
          </li>
        </ul>
        <div className="relative flex justify-end">
          <input
            className="w-full h-10 px-3 pr-10 text-sm bg-gray-100 rounded-full focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Ara..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              className="h-4 w-4 fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M11.414 12.586a6 6 0 1 1 1.414-1.414l5.162 5.163a1 1 0 0 1-1.414 1.414l-5.162-5.163zM6 10a4 4 0 1 0 8 0a4 4 0 0 0-8 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
