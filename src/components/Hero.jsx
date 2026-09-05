import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import project01 from "../assets/images/Projects/project-01.jpg";
import project02 from "../assets/images/Projects/project-02.jpg";
import project03 from "../assets/images/Projects/project-03.jpg";

const heroSlides = [
  { image: project01, alt: "Warm residential interior by Woody" },
  { image: project02, alt: "Light-filled courtyard residence by Woody" },
  { image: project03, alt: "Refined hospitality interior by Woody" },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [activeSlide]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  const goToPrevious = () => {
    setActiveSlide(
      (currentSlide) =>
        (currentSlide - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const goToNext = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
  };

  return (
    <section className="hero" aria-label="Woody interior design studio">
      <div className="hero-image-wrapper">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className={`hero-image${index === activeSlide ? " hero-image-active" : ""}`}
            aria-hidden={index !== activeSlide}
          />
        ))}
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

        <div className="hero-carousel-controls" aria-label="Hero image controls">
          <button
            type="button"
            className="hero-carousel-arrow"
            onClick={goToPrevious}
            aria-label="Previous hero image"
          >
            <ArrowLeft size={15} strokeWidth={1.7} aria-hidden="true" />
          </button>

          <div className="hero-carousel-dots">
            {heroSlides.map((slide, index) => (
              <button
                type="button"
                className={`hero-carousel-dot${index === activeSlide ? " hero-carousel-dot-active" : ""}`}
                key={slide.image}
                onClick={() => goToSlide(index)}
                aria-label={`Show hero image ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
              />
            ))}
          </div>

          <button
            type="button"
            className="hero-carousel-arrow"
            onClick={goToNext}
            aria-label="Next hero image"
          >
            <ArrowRight size={15} strokeWidth={1.7} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
