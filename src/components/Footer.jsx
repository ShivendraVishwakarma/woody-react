import { Link } from "react-router-dom";

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
        <span>Woody</span>
        <span>Interior Architecture & Design</span>
      </div>

      <div className="footer-content">
        <div className="footer-brand-panel">
          <Link to="/" className="footer-logo">
            WOODY
          </Link>

          <p>
            Creating warm, refined residential interiors shaped around
            functionality, materiality, and considered everyday living.
          </p>
        </div>

        <div className="footer-link-grid">
          <div>
            <span className="footer-column-title">Navigation</span>
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
        <span>&copy; 2026 Woody Studio</span>
        <span>Residential Interiors</span>
        <Link to="/contact">Start a Project</Link>
      </div>
    </footer>
  );
}

export default Footer;
