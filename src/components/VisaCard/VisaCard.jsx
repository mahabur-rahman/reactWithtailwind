import React from "react";
import "./visaCard.scss";
import visaImg from "../../images/visa.png";
// Aos
import AOS from "aos";
import "aos/dist/aos.css";

// AOS.init()

AOS.init({
  offset: 200,
  duration: 800,
  easing: "ease-in-out-sine",
  delay: 200,
  mirror: true,
});

const VisaCard = () => {
  return (
    <>
      <section id="visaCard" className="pt-20 pb-48">
        <div className="container mx-auto">
          <div className="flex flex-wrap text-center">
            <div className="sm:w-full w-full">
              <div className="main_sec">
                <h2 className="text-4xl text-white font-bold text-center mb-32">
                  Magical All-in-one Card
                </h2>
                <div className="visa_img" data-aos="flip-right">
                  <img src={visaImg} alt="Visa Card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisaCard;
