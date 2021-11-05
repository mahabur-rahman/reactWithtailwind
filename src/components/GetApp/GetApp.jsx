import React from "react";
import "./getApp.scss";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const GetApp = () => {
  return (
    <>
      <section id="getApp" className="py-24 text-white">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold mb-16">Get the App.</h2>
          <div className="flex flex-wrap">
            <div className="sm:w-full w-full">
              <div className="download_btn flex justify-around">
                <button className="flex items-center bg-pink-600 px-10 py-3 rounded-full play_store">
                  <FaGooglePlay className="text-5xl" />
                  <span className="font-bold mx-3"> Download the app</span>
                </button>

                <button className="flex items-center bg-blue-500 px-10 py-3 rounded-full apple_store">
                  <FaApple className="text-5xl" />
                  <span className="font-bold mx-3"> Download the app</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetApp;
