import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0A1628",
            color: "#e0e8f0",
            border: "1px solid #1A2A45",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Future routes will be added here */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
