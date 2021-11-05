import React from "react";
import "./footer.scss";
import footerImg from "../../images/footerImg.svg";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="py-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="xs:w-full w-full">
              <div className="footer_content flex justify-evenly items-center">
                <div className="footer_img">
                  <NavLink to="/">
                    <img src={footerImg} alt="Powered by Bharotepe" />
                  </NavLink>
                </div>
                <div className="links my-5 lg:my-0">
                  <NavLink to="/" className="text-xs font-bold text-black mx-3">
                    Contact Us
                  </NavLink>
                  <NavLink to="/" className="text-xs font-bold text-black mx-3">
                    FAQs
                  </NavLink>
                  <NavLink to="/" className="text-xs font-bold text-black mx-3">
                    Privacy Policy
                  </NavLink>
                  <NavLink to="/" className="text-xs font-bold text-black mx-3">
                    Terms of Service
                  </NavLink>
                  <NavLink to="/" className="text-xs font-bold text-black mx-3">
                    Terms of Card
                  </NavLink>
                </div>
                <div className="social_Link flex">
                  <NavLink
                    to="/"
                    className="mx-4 bg-black rounded-full p-2 text-white"
                  >
                    <FaFacebookF className="text-xl" />
                  </NavLink>
                  <NavLink
                    to="/"
                    className="mx-4 bg-black rounded-full p-2 text-white"
                  >
                    <FaInstagram className="text-xl" />
                  </NavLink>
                  <NavLink
                    to="/"
                    className="mx-4 bg-black rounded-full p-2 text-white"
                  >
                    <FaTwitter className="text-xl" />
                  </NavLink>
                  <NavLink
                    to="/"
                    className="mx-4 bg-black rounded-full p-2 text-white"
                  >
                    <FaYoutube className="text-xl" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
