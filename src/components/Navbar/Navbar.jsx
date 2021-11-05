import React from "react";
// navbar css
import "./navbar.scss";
// logo
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header id="navbar" className="py-14">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="sm:w-full w-full">
              <div className="navbar_main flex align-middle justify-around">
                <div className="nav_logo">
                  <NavLink to="/">
                    <img src={logo} alt="Nav logo" />
                  </NavLink>
                </div>
                <div className="nav_button">
                  <NavLink
                    to="/"
                    className="download_btn px-5 py-3 rounded-xl font-bold capitalize text-sm"
                  >
                    Download
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
