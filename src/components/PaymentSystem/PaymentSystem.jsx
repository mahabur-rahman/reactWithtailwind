import React from "react";
import "./payment.scss";
// images
import paymentImgOne from "../../images/payment1.png";
import paymentImgTwo from "../../images/payment2.png";
import paymentImgThree from "../../images/payment3.png";

const PaymentSystem = () => {
  return (
    <>
      <section id="paymentSystem">
        <div className="container mx-auto">
          <h2 className="text-center font-bold text-4xl mb-60 mt-24">
            Your true payment companion
          </h2>

          <div className="paymentSystem_img flex md:justify-evenly justify-center -mb-72">
            <img src={paymentImgOne} alt="Payment System" />
            <img src={paymentImgTwo} alt="Payment System" className="-mt-40" />
            <img src={paymentImgThree} alt="Payment System" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentSystem;
