import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">

      {/* MAIN FOOTER */}

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-brand">

          <Link
            to="/"
            className="footer-logo"
          >
            WOODY
          </Link>

          <p>
            Interior architecture
            <br />
            & design studio.
          </p>

        </div>


        {/* NAVIGATION */}

        <div className="footer-column">

          <span className="footer-column-title">
            Explore
          </span>

          <Link to="/projects">
            Projects
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/studio">
            Studio
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* CONTACT */}

        <div className="footer-column">

          <span className="footer-column-title">
            Contact
          </span>

          <a href="mailto:hello@woody.studio">
            hello@woody.studio
          </a>

          <span>
            New Delhi
          </span>

          <span>
            India
          </span>

        </div>


        {/* SOCIAL */}

        <div className="footer-column">

          <span className="footer-column-title">
            Follow
          </span>

          <span>
            Instagram
          </span>

          <span>
            LinkedIn
          </span>

        </div>

      </div>


      {/* WORDMARK */}

      <div className="footer-wordmark">
        WOODY
      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <span>
          © 2026 Woody Studio
        </span>

        <span>
          Interior Architecture & Design
        </span>

        <Link to="/contact">
          Start a Project ↗
        </Link>

      </div>

    </footer>
  );
}

export default Footer;