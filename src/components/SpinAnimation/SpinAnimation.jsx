import React from "react";
import "./spinAnimation.scss";
// images
import phone from "../../images/phone.png";
import qr from "../../images/qr.png";
import earth from "../../images/earth.png";
import paymentCard from "../../images/payment.png";
import postpe from "../../images/postpe.svg";
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

const SpinAnimation = () => {
  return (
    <>
      <section id="spinAnimation">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="border_round mt-20" data-aos="fade-up">
              <div className="main_screen">
                <div className="main_graphics">
                  <div className="phone">
                    <img src={phone} alt="Phone" />
                    <div className="postpe">
                      <img src={postpe} alt="Postpe" />
                    </div>
                  </div>
                  <div className="move_elements">
                    <div className="qr">
                      <img src={qr} alt="Qr Code" />
                    </div>
                    <div className="earth">
                      <img src={earth} alt="Earth" />
                    </div>
                    <div className="payment_card">
                      <img src={paymentCard} alt="Payment Card" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* heading */}
        <div className="title text-center mt-20 sm:p-12" data-aos="fade-up">
          <h3 className="text-4xl font-bold text-white">
            Pay on QR, card machine or online.
          </h3>
        </div>
      </section>
    </>
  );
};

export default SpinAnimation;
