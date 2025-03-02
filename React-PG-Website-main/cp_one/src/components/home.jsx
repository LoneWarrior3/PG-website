import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import ContactUs from "./ContactUs.jsx";
import Footer from "./Footer.jsx";
import Amenities from "./amenities.jsx";
import Buildings from "./Buildings.jsx";
import Menu from "./MenuCard.jsx";
import Feedback from "./feedback.jsx";
import "./Home.css"; // ✅ Import CSS file

const Home = () => {
  const [active, setActive] = useState("Home");
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutId = useRef(null);

  const handleMouseMove = () => {
    setShowNavbar(true);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => setShowNavbar(false), 2000);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className={`navbar-container ${showNavbar ? "visible" : "hidden"}`}>
        <header className="d-flex align-items-center w-100">
          <div className="d-flex align-items-center gap-3">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <span className="navbar-title">Vinayaka PG</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav nav-pills ms-auto">
            {[
              { name: "Home", link: "#home" },
              { name: "Rooms", link: "#buildings" },
              { name: "Amenities", link: "#amenities" },
              { name: "Menu", link: "#menu" },
              { name: "Feedback", link: "#feedback" },
              { name: "Contact Us", link: "#contact-us" },
            ].map((item) => (
              <li key={item.name} className="nav-item mx-2">
                <a
                  href={item.link}
                  className={`nav-link ${
                    active === item.name ? "active-link" : ""
                  }`}
                  onClick={() => setActive(item.name)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* ✅ Toggle Button for Mobile */}
          <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          {/* ✅ Dropdown Menu for Mobile */}
          <div className={`navbar-dropdown ${menuOpen ? "show" : ""}`}>
            {[
              { name: "Home", link: "#home" },
              { name: "Rooms", link: "#buildings" },
              { name: "Amenities", link: "#amenities" },
              { name: "Menu", link: "#menu" },
              { name: "Feedback", link: "#feedback" },
              { name: "Contact Us", link: "#contact-us" },
            ].map((item) => (
              <a key={item.name} href={item.link} onClick={() => setMenuOpen(false)}>
                {item.name}
              </a>
            ))}
          </div>
        </header>
      </div>

      {/* Background Section with Welcome Text */}
      <div id="home" className="home-container">
        <div className="home-overlay"></div>
        <h1 className="home-title">Welcome to Vinayaka PG</h1>
      </div>

      <div id="buildings">
        <Buildings />
      </div>

      <div id="amenities">
        <Amenities />
      </div>

      <div id="menu">
        <Menu />
      </div>

      <div id="feedback">
        <Feedback />
      </div>

      {/* Contact Us Section */}
      <div id="contact-us">
        <ContactUs />
      </div>

      <div style={{ marginTop: "-100px" }}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
