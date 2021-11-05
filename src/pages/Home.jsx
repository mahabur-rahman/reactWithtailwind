import React from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import SpinAnimation from "../components/SpinAnimation/SpinAnimation";
import PaymentSystem from "../components/PaymentSystem/PaymentSystem";
import Dashboard from "../components/Dashboard/Dashboard";
import VisaCard from "../components/VisaCard/VisaCard";
import GetApp from "../components/GetApp/GetApp";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Card />
      <SpinAnimation />
      <PaymentSystem />
      <Dashboard />
      <VisaCard />
      <GetApp />
      <Footer />
    </>
  );
};

export default Home;
