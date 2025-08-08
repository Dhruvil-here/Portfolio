import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // scroll down -> hide
    } else {
      setShowNavbar(true); // scroll up -> show
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={`nav ${showNavbar ? "visible" : "hidden"}`}>
      <div className="logo">
        <img src="images/logo.png" alt="Logo" />
      </div>

      <div className="nav-links desktop">
        <button
          onClick={() => {
            scrollToSection("home");
            toggleMenu();
          }}
          className="link"
        >
          Home
        </button>
        <button
          onClick={() => {
            scrollToSection("about");
            toggleMenu();
          }}
          className="link"
        >
          About
        </button>
        <button
          onClick={() => {
            scrollToSection("projects");
            toggleMenu();
          }}
          className="link"
        >
          Projects
        </button>
        <button
          onClick={() => {
            scrollToSection("contactme");
            toggleMenu();
          }}
          className="link"
        >
          Contact Me
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Nav Links */}
      {isMenuOpen && (
        <div className="nav-links mobile">
          <button
            className="link"
            onClick={() => {
              scrollToSection("home");
              toggleMenu();
            }}
          >
            Home
          </button>
          <button
            className="link"
            onClick={() => {
              scrollToSection("about");
              toggleMenu();
            }}
          >
            About
          </button>
          <button
            className="link"
            onClick={() => {
              scrollToSection("projects");
              toggleMenu();
            }}
          >
            Projects
          </button>
          <button
            className="link"
            onClick={() => {
              scrollToSection("contactme");
              toggleMenu();
            }}
          >
            Contact Me
          </button>
        </div>
      )}

      {/* Resume Button (Desktop Only) */}
      <a
        href="/images/react2.docx"
        className="resume desktop-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Resume</button>
      </a>
      <a
        href="/images/react2.docx"
        className="resume mobile-resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Resume</button>
      </a>
    </div>
  );
};

export default Navbar;
