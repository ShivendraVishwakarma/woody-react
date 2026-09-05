import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import project01 from "../assets/images/Projects/project-01.jpg";

function Hero() {
  return (
    <section className="hero" aria-label="Woody interior design studio">
      <div className="hero-image-wrapper">
        <img
          src={project01}
          alt="Warm residential interior by Woody"
          className="hero-image hero-image-active"
        />
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-category">Interior Design Studio</p>

        <h1 className="hero-title">
          Spaces designed around the way you live.
        </h1>

        <p className="hero-description">
          We create thoughtful residential interiors that balance
          functionality, natural materials and timeless design, shaped around
          the people who live in them.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="hero-button">
            <span>Start a Project</span>
            <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
          </Link>

          <Link to="/projects" className="hero-text-link">
            View Our Work
          </Link>
        </div>
      </div>

      <div className="hero-panel" aria-label="Studio details">
        <span>Residential Interiors</span>
        <span>Delhi NCR</span>
        <span>Design / Planning / Execution</span>
      </div>
    </section>
  );
}

export default Hero;
