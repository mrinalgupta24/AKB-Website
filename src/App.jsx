import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
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
import Donation2 from "./pages/Donation2";
import Donation3 from "./pages/Donation3";
import Donation4 from "./pages/Donation4";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once or every time you scroll
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/donation2" element={<Donation2/>} />
          <Route path="/donation3" element={<Donation3/>} />
          <Route path="/donation4" element={<Donation4/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
