import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Mainbio from "./components/MainBio/mainbio";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainbio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
