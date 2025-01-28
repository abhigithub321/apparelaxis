import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for routing
import logo from "../Images2/logo.png";
import lens from "../Images2/lens.png";
import accounts from "../Images2/accounts.png";
import logout from "../Images2/logout.png";
import "../Navbar1/Nav.css";

const Navbar = ({ setShowOnlyLinkContent }) => {
  const openLoginModal = () => setShowOnlyLinkContent(false); // Show everything
  const location = useLocation();

  return (
    <nav className="flex items-center text-sm font-bold text-gray-700 p-3 shadow-lg bg-[#FFBA6F] fixed top-0 left-0 w-full z-10">
      {/* Logo */}
      <div className="w-[10%] flex items-center">
        <Link to="/" onClick={() => setShowOnlyLinkContent(false)} className="flex items-center">
          <img src={logo} className="w-19 h-9 ml-5" alt="Company Logo" />
          {/* <span className="ml-2 text-lg font-bold text-gray-700">ApprialAxis</span> */}
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="w-[50%] flex flex-row items-center hidden md:flex space-x-4 navbar-links">
        <li className="px-[10px] cursor-pointer">
          <Link to="/products" onClick={() => setShowOnlyLinkContent(true)}>
            Products
          </Link>
        </li>
        <li className="px-[10px] cursor-pointer">
          <Link to="/mens" onClick={() => setShowOnlyLinkContent(true)}>
            Mens
          </Link>
        </li>
        <li className="px-[10px] cursor-pointer">
          <Link to="/womens" onClick={() => setShowOnlyLinkContent(true)}>
            Womens
          </Link>
        </li>
        <li className="px-[10px] cursor-pointer">
          <Link to="/kids" onClick={() => setShowOnlyLinkContent(true)}>
            Kids
          </Link>
        </li>
        <li className="px-[10px] cursor-pointer">
          <Link to="/about-us" onClick={() => setShowOnlyLinkContent(true)}>
            About Us
          </Link>
        </li>
        <li className="px-[10px] cursor-pointer">
          <Link to="/contacts" onClick={() => setShowOnlyLinkContent(true)}>
            Contacts
          </Link>
        </li>
      </ul>

      <div className="search-box-left flex items-center ml-5 searchbox">
        <div className="relative w-[700px]">
          <div className="absolute left-3 top-2">
            <img src={lens} className="h-5 w-5" alt="Search Icon" />
          </div>
          <input
            className="bg-gray-100 text-gray-900 font-normal outline-none text-sm rounded-full block w-full pl-10 pr-3 py-2.5"
            placeholder="Search for products....."
            required
          />
        </div>
      </div>

      {/* Account Section */}
      <div className="ml-6 text-xs flex flex-col items-center account">
        <button onClick={openLoginModal} className="flex flex-col items-center focus:outline-none">
          <img src={accounts} className="w-5 h-5" alt="Account Icon" />
          <span>Login</span>
        </button>
      </div>

      {/* Logout Section */}
      <div className="ml-6 text-xs flex flex-col items-center logout">
        <button
          className="flex flex-col items-center focus:outline-none"
          onClick={() => (window.location.href = "/logout")}
        >
          <img src={logout} className="w-4 h-4 mb-1" alt="Logout Icon" />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
