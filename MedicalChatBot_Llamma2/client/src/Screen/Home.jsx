import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import News from "../components/News";
import Doctor from "../components/Doctor";
import Appointment from "../components/Appointment";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";
const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  return (
    <>
      <Navbar />
      {/* <div className="container">
                  <button
                    onClick={() => setShowChatbot(!showChatbot)}
                    className="btn btn-primary mt-3 mb-4"
                  >
                    {showChatbot ? 'Go Back' : 'Show Medical Chatbot'}
                  </button>
                  {showChatbot && <Chatbot />}
      </div> */}
      <Hero title="Healthy Living" para="Let's make your life happier" />
      <Services/>
      <Doctor />
      <News />
      <Appointment />
      <Footer/>
    </>
  );
};
export default Home;
