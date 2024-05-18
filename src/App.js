// Enhanced App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import QualityHSE from "./pages/QualityHSE";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <title>
          Geogreatotechnics & Geodreels Ltd - Premier Geotechnical Services in
          West Africa
        </title>
        <meta
          name="description"
          content="Explore unparalleled geotechnical, geophysical, and environmental services by Geogreatotechnics & Geodreels Ltd, your trusted partner in West Africa for oil & gas, construction, and environmental projects."
        />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Team />} />
        <Route path="/quality-hse" element={<QualityHSE />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
