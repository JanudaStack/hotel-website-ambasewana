import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Routes & Route import karanna
import AOS from "aos";
import "aos/dist/aos.css";

// Common Components
import Navbar from "./components/common/Navbar/Navbar"; // Path hariyatama balanna
import Footer from "./components/common/FooterNew"; // FooterNew eka rename kara neda? Nattam FooterNew ma danna

// Pages
import Home from "./pages/Home";       // Aluth Home page eka
import Booking from "./pages/Booking"; // Aluth Booking page eka

import "./App.css";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Scroll Restoration Logic
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 2. Clear URL Hash
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // 3. Init Animations
    AOS.init({
      once: true,
    });
  }, [location.pathname]); // Path eka maru wena hama welemane meka wenna one

  return (
    <main>
      <Navbar />
      
      {/* Route Switcher eka methanata enne */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />
    </main>
  );
};

export default App;