import React, {useState} from "react";
import {FaBeer} from "react-icons/fa";
import {IoClose} from "react-icons/io5";
import {AiOutlineMenu} from "react-icons/ai";

function Navbar() {
  const NavLinks = [
    "Home",
    "Market",
    "Explore",
    "Exhibition",
    "Artists & Collectores",
  ];

  const [nav, setNav] = useState(false);

  // const toggleMap = () => {
  //   setNav((prev) => {
  //     return !prev;
  //   });
  // };

  const toggleMap = () => {
    return setNav(!nav)
  }

  return (
    <nav className=" p-4 bg-slate-900 text-white">
      <div className="container mx-auto max-w-screen-xl relative">
        <div className=" flex justify-between">
          <a
            href="/"
            className=" text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500  via-blue-600 to-orange-400"
          >
            <span>NFT</span> Market.
          </a>
          {/* Menu Items */}
          <div className=" hidden lg:flex space-x-6 text-sm items-center text-white">
            {NavLinks.map((link, index) => {
              return (
                <a
                  key={index}
                  className=" hover:text-indigo-600 duration-200 ease-in-out"
                >
                  {link}
                </a>
              );
            })}
            <button className=" px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700">
              {" "}
              Connect Wallet
            </button>
          </div>
          {/* Hamburger Menu */}
          <div
            className="lg:hidden"
            onClick={toggleMap}
          >
            {nav ? (
              <IoClose
                size={28}
                className="text-white"
              />
            ) : (
              <AiOutlineMenu
                size={25}
                className=" text-white"
              />
            )}
          </div>

          {/* mobile MENU */}

          {nav && (
            <div className=" absolute top-14  bg-gradient-to-r from-rose-400 via-fuchsia-500  to-indigo-500 w-full px-28 py-8 rounded-lg">
              <div className=" space-y-6 text-sm flex flex-col items-center text-white">
                {NavLinks.map((link, index) => {
                  return (
                    <a
                      key={index}
                      className=" hover:text-indigo-600 duration-200 ease-in-out"
                    >
                      {link}
                    </a>
                  );
                })}
                <button className=" px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700">
                  {" "}
                  Connect Wallet
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
