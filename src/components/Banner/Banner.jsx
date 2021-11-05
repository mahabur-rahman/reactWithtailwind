import React from "react";
import "./banner.scss";
import bannerLeftImg from "../../images/bannerLeftImg.svg";
import imgOne from "../../images/bannerOne.png";
import imgTwo from "../../images/bannerTwo.png";
import imgThree from "../../images/bannerThree.png";
import imgFour from "../../images/bannerFour.png";
import imgFive from "../../images/bannerFive.png";

// particle js
import Particles from "react-particles-js/umd/particles";

// Aos
import AOS from "aos";
import "aos/dist/aos.css";

// AOS.init()
AOS.init({});

// particle js
let params = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#c311e7", "#019DDD", "#4dc9ff", "#E73178", "#6B4794"],
    },
    shape: {
      type: "circle",

      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.9,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.5,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: false,
      anim: {
        enable: true,
        speed: 30,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 125,
        duration: 1,
      },
      push: {
        particles_nb: 3,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const Banner = () => {
  return (
    <>
      <div id="particles-js">
        <Particles width="100vw" height="100vh" params={params} />
      </div>
      <section id="banner" className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap align-middle">
            <div className="2xl:w-6/12 xl:w-5/12 lg:w-3/12 md:w-12/12 sm:w-full w-full">
              <div className="banner_left">
                <h2 className="text-5xl font-bold mb-5" data-aos="fade-right">
                  De dena aaram se
                </h2>
                <img
                  src={bannerLeftImg}
                  alt="Banner"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                />
              </div>
            </div>
            <div
              className="2xl:w-6/12 xl:w-7/12 lg:w-9/12 md:w-12/12 sm:w-full w-full"
              data-aos="fade-up-left"
            >
              <div className="banner_right">
                <img src={imgOne} alt="Banner" className="px-52 first_img" />

                <div className="middlePart flex justify-center">
                  <img src={imgTwo} alt="Banner" />
                  <img src={imgThree} alt="Banner" />
                  <img src={imgFour} alt="Banner" />
                </div>

                <img src={imgFive} alt="Banner" className="px-52 first_img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
