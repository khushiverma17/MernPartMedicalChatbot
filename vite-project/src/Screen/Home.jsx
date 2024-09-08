import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import News from "../components/News";
import Doctor from "../components/Doctor";
import Appointment from "../components/Appointment";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero title="Healthy Living" para="Let's make your life happier" />
      <Doctor />
      <News />
      <Appointment />
    </>
  );
};
export default Home;
