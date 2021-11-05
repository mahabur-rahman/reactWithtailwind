import React from "react";
import "./dashboard.scss";
// images
import fixedImgOne from "../../images/fixedImg1.png";
import fixedImgTwo from "../../images/fixedImg2.png";
import fixedImgThree from "../../images/fixedImg3.png";
import fixedImgFour from "../../images/fixedImg4.png";
import fixedImgFive from "../../images/fixedImg5.png";
// Aos
import AOS from "aos";
import "aos/dist/aos.css";

// AOS.init()

AOS.init({
  easing: "ease-in-out-sine",
  delay: 200,
  mirror: true,
});

const Dashboard = () => {
  return (
    <>
      <section id="dashboard">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="text-center mx-auto flex">
              <div className="title">
                <h2 className="text-white font-bold text-5xl h-screen">
                  Personalized Dashboard
                </h2>
                <h2 className="text-white font-bold text-5xl h-screen">
                  Simple Scan
                </h2>
                <h2 className="text-white font-bold text-5xl h-screen">
                  Send Money to your friend <br /> or Account
                </h2>
                <h2 className="text-white font-bold text-5xl h-screen">
                  Hasslefree experience
                </h2>
                <h2 className="text-white font-bold text-5xl ">
                  Easy transaction flow
                </h2>
              </div>
              <div className="text-center ml-80">
                {/* fixed img */}
                <div className="sticky top-0 scroll_effect -mt-48 flex">
                  <img
                    src={fixedImgOne}
                    alt="Scroll Animation"
                    data-aos="fade-left"
                  />

                  <img
                    src={fixedImgTwo}
                    alt="Scroll Animation"
                    data-aos="fade-left"
                    className="secondImg mt-8"
                    data-aos-offset="980"
                    data-aos-duration="500"
                  />

                  <img
                    src={fixedImgThree}
                    alt="Scroll Animation"
                    className="thirdImg mt-8"
                    data-aos="fade-left"
                    data-aos-offset="2000"
                    data-aos-duration="500"
                  />
                  <img
                    src={fixedImgFour}
                    alt="Scroll Animation"
                    className="fourthImg mt-8"
                    data-aos="fade-left"
                    data-aos-offset="3000"
                    data-aos-duration="500"
                  />
                  <img
                    src={fixedImgFive}
                    alt="Scroll Animation"
                    className="fifthImg mt-8"
                    data-aos="fade-left"
                    data-aos-offset="4000"
                    data-aos-duration="500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
