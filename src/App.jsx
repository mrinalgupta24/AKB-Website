import { useState } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
