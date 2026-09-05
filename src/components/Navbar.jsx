import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Studio", path: "/studio" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("woody-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const isImageHeroRoute = pathname === "/" || pathname.startsWith("/projects/");
  const isDarkPage = pathname === "/services";
  const isOverDarkSurface = (isImageHeroRoute || isDarkPage) && !scrolled && !menuOpen;

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

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("woody-theme", theme);
  }, [theme]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const navClass = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  return (
    <nav
      className={[
        "navbar",
        scrolled ? "navbar-scrolled" : "",
        menuOpen ? "navbar-menu-open" : "",
        isOverDarkSurface ? "navbar-over-hero" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <span>WOODY</span>
        <small>Interiors</small>
      </Link>

      <div className="navbar-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={navClass}>
            <span className="nav-link-label">{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="navbar-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          aria-pressed={theme === "dark"}
          title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? (
            <Moon size={16} strokeWidth={1.7} aria-hidden="true" />
          ) : (
            <Sun size={16} strokeWidth={1.7} aria-hidden="true" />
          )}
        </button>

        <Link to="/contact" className="navbar-cta" onClick={closeMenu}>
          <span>Book Consultation</span>
          <span className="navbar-cta-icon">
            <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
          </span>
        </Link>
      </div>

      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <X size={20} strokeWidth={1.7} aria-hidden="true" />
        ) : (
          <Menu size={20} strokeWidth={1.7} aria-hidden="true" />
        )}
        <span>{menuOpen ? "Close" : "Menu"}</span>
      </button>

      <div className={`mobile-menu${menuOpen ? " mobile-menu-open" : ""}`}>
        <div className="mobile-menu-inner">
          {navItems.map((item, index) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={navClass}
              onClick={closeMenu}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </NavLink>
          ))}

          <Link to="/contact" className="mobile-menu-cta" onClick={closeMenu}>
            Start a Project
            <ArrowUpRight size={18} strokeWidth={1.7} aria-hidden="true" />
          </Link>
        </div>

        <div className="mobile-menu-footer">
          <span>Interior Architecture & Design</span>
          <span>New Delhi / India</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
