import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        WOODY
      </Link>

      <div className="navbar-links">
        <Link to="/work">Work</Link>
        <Link to="/services">Services</Link>
        <Link to="/studio">Studio</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {menuOpen && (
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/work" onClick={() => setMenuOpen(false)}>
            Work
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>

          <Link to="/studio" onClick={() => setMenuOpen(false)}>
            Studio
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        MENU
      </button>

      <Link to="/contact" className="navbar-cta">
        Start a project
      </Link>

    </nav>
  );
}

export default Navbar;