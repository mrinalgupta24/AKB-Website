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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
