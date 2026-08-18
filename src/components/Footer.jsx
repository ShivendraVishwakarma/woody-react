import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Studio", path: "/studio" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = ["Instagram", "Pinterest", "LinkedIn"];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-topline">
        <span>Woody Studio</span>
        <span>Interior Architecture & Design</span>
      </div>

      <div className="footer-content">
        <div className="footer-brand-panel">
          <Link to="/" className="footer-logo">
            WOODY
          </Link>

          <p>
            Creating warm, refined interiors for homes, hospitality spaces, and
            considered everyday living.
          </p>
        </div>

        <div className="footer-cta-panel">
          <span>Have a space in mind?</span>
          <h2>Let us shape it with clarity, restraint, and detail.</h2>

          <Link to="/contact" className="footer-primary-link">
            Start a project
            <ArrowUpRight size={18} strokeWidth={1.7} aria-hidden="true" />
          </Link>
        </div>

        <div className="footer-link-grid">
          <div>
            <span className="footer-column-title">Explore</span>
            {footerLinks.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <span className="footer-column-title">Contact</span>
            <a href="mailto:hello@woody.studio">hello@woody.studio</a>
            <span>New Delhi, India</span>
            <span>Mon - Sat / 10 AM - 6 PM</span>
          </div>

          <div>
            <span className="footer-column-title">Social</span>
            {socialLinks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>(C) 2026 Woody Studio</span>
        <span>Residential / Hospitality / Styling</span>
        <Link to="/contact">
          Book Consultation
          <ArrowUpRight size={14} strokeWidth={1.7} aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
