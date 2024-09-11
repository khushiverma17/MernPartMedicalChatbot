import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screen/Home";
import About from "./Screen/About";
import NEWS from "./Screen/News";
import { NewsProvider } from "./ContexApi/Newsprovider";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ContactUs from "./Screen/Contact";
function App() {
  return (
    <>
      <NewsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<NEWS />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </NewsProvider>
    </>
  );
}

export default App;
