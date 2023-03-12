import React from 'react'
import { Outlet} from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center bg-gray-400 justify-between flex-wrap font-serif shadow-2xl  p-2 mb-3">
      <div className="flex items-end flex-shrink-0 text-black mr-6 bg-gray-50">
        <a href="https://cdn.imgbin.com/15/25/4/imgbin-shopify-e-commerce-logo-web-design-design-qXjMADSvFauX9EM7aNwbpi2UK.jpg">
        <img src="data:image/png;base64,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"className="w-30 h-10" alt={"logo"} />
          {/* <p className="font-semibold text-xl tracking-tight">My Logo</p> */}
        </a>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/></svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-md lg:flex-grow text-center justify-around">
          <a href="/">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4"
              onClick={toggleMenu}
            >
              Home
            </p>
          </a>
          <a href="./about">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200 mr-4"
              onClick={toggleMenu}
            >
              About
            </p>
          </a>
          <a href="/">
            <p
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-200"
              onClick={toggleMenu}
            >
          Contact Us
            </p>
          </a>
          
        </div>
        
      </div>
<Outlet/>
    </nav>
  );
};

export default Navbar;

