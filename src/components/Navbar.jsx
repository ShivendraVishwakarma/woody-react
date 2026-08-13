import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  return (
    <nav className={`navbar${scrolled ? " navbar-scrolled" : ""}`}>

      {/* Logo */}

      <Link
        to="/"
        className="navbar-logo"
        onClick={closeMenu}
      >
        WOODY
      </Link>


      {/* Desktop Navigation */}

      <div className="navbar-links">

        <NavLink
          to="/projects"
          className={navClass}
        >
          Projects
        </NavLink>

        <NavLink
          to="/services"
          className={navClass}
        >
          Services
        </NavLink>

        <NavLink
          to="/studio"
          className={navClass}
        >
          Studio
        </NavLink>

        <NavLink
          to="/contact"
          className={navClass}
        >
          Contact
        </NavLink>

      </div>


      {/* CTA */}

      <Link
        to="/contact"
        className="navbar-cta"
        onClick={closeMenu}
      >
        <span>Start a Project</span>
        <span className="navbar-cta-arrow">↗</span>
      </Link>


      {/* Mobile Toggle */}

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={
          menuOpen
            ? "Close navigation"
            : "Open navigation"
        }
        aria-expanded={menuOpen}
      >
        <span>
          {menuOpen ? "Close" : "Menu"}
        </span>
      </button>


      {/* Mobile Navigation */}

      <div
        className={`mobile-menu${
          menuOpen ? " mobile-menu-open" : ""
        }`}
      >

        <div className="mobile-menu-inner">

          <NavLink
            to="/projects"
            className={navClass}
            onClick={closeMenu}
          >
            <span>01</span>
            Projects
          </NavLink>

          <NavLink
            to="/services"
            className={navClass}
            onClick={closeMenu}
          >
            <span>02</span>
            Services
          </NavLink>

          <NavLink
            to="/studio"
            className={navClass}
            onClick={closeMenu}
          >
            <span>03</span>
            Studio
          </NavLink>

          <NavLink
            to="/contact"
            className={navClass}
            onClick={closeMenu}
          >
            <span>04</span>
            Contact
          </NavLink>

        </div>

        <div className="mobile-menu-footer">
          <span>Interior Architecture & Design</span>
          <span>New Delhi · India</span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;