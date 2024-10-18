import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screen/Home";
import About from "./Screen/About";
import { NewsProvider } from "./ContexApi/Newsprovider";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ContactUs from "./Screen/Contact";
import Loader from "./components/Loader";
import NEWS from "./Screen/NEWS";
import Chatbot from "./components/Chatbot";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function App() {
  const [loading, setLoading] = useState(true);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    // Simulate loading time for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <NewsProvider>
          <div className="container">
            <button
              onClick={() => setShowChatbot(!showChatbot)}
              className="btn btn-primary mt-3 mb-4"
            >
              {/* {showChatbot ? "Go Back" : "Chat With Us"} */}
              {showChatbot ? <div>
                Go Back
              </div> : <div>Chat <IoChatbubbleEllipsesOutline/></div>}
            </button>
            {showChatbot ? (
              <Chatbot />
            ) : (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/news" element={<NEWS />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/chatbot" element={<Chatbot />} />
                  <Route path="/SignUp" element={<SignUp />} />
                  <Route path="/contact" element={<ContactUs />} />
                </Routes>
              </BrowserRouter>
            )}
          </div>
        </NewsProvider>
      )}
    </>
  );
}

export default App;
