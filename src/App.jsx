import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import Donation2 from "./pages/Donation2";
import Donation3 from "./pages/Donation3";
import Donation4 from "./pages/Donation4";
import Fundraiser from "./pages/Fundraiser";
import Donation5 from "./pages/Donation5";
import FoodforNeedy from "./pages/FoodforNeedy";
import ProvideGroceries from "./pages/ProvideGroceries";
import FeedStrayCatsandDogs from "./pages/FeedStrayCatsandDogs";
import PlantTrees from "./pages/PlantTrees";
import ProvideClothes from "./pages/ProvideClothes";
import ProvideMedicines from "./pages/ProvideMedicines";
import ProvideSanitaryPads from "./pages/ProvideSanitaryPads";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
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
          <Route path="/donation2" element={<Donation2 />} />
          <Route path="/donation3" element={<Donation3 />} />
          <Route path="/donation4" element={<Donation4 />} />
          <Route path="/fundraiser/:id" element={<Fundraiser />} />
          <Route path="/donation5" element={<Donation5 />} />
          <Route path="/FoodforNeedy" element={<FoodforNeedy />} />
          <Route path="/ProvideGroceries" element={<ProvideGroceries />} />
          <Route
            path="/FeedStrayCatsandDogs"
            element={<FeedStrayCatsandDogs />}
          />
          <Route path="/PlantTrees" element={<PlantTrees />} />
          <Route path="/ProvideClothes" element={<ProvideClothes />} />
          <Route path="/ProvideMedicines" element={<ProvideMedicines />} />
          <Route
            path="/ProvideSanitaryPads"
            element={<ProvideSanitaryPads />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
