import { useState, useEffect } from "react";

import heroImage from "../assets/images/hero-1.jpg";
import heroImage2 from "../assets/images/hero-2.jpg";
import heroImage3 from "../assets/images/hero-3.jpg";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);

  const projects = [
    {
      image: heroImage,
      category: "Residential Interior",
      title: "The Calm Residence",
      description:
        "A thoughtful interior shaped by warmth, natural light, and quiet luxury.",
    },
    {
      image: heroImage2,
      category: "Contemporary Residence",
      title: "Casa Noir",
      description:
        "A dramatic composition of dark textures, refined materials, and modern form.",
    },
    {
      image: heroImage3,
      category: "Minimal Living",
      title: "The Quiet House",
      description:
        "A restrained interior where architecture, light, and simplicity take center stage.",
    },
  ];

  const currentProject = projects[currentSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide) => {
        const nextSlide = (currentSlide + 1) % projects.length;

        setPreviousSlide(currentSlide);

        return nextSlide;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [projects.length]);

  return (
    <section className="hero">

      <div className="hero-image-wrapper">
        <img
          src={projects[previousSlide].image}
          alt=""
          className="hero-image hero-image-previous"
        />

        <img
          key={currentSlide}
          src={currentProject.image}
          alt={currentProject.title}
          className="hero-image hero-image-current slide-enter"
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content" key={currentSlide}>
        <p className="hero-category">
          {currentProject.category}
        </p>

        <h1 className="hero-title slide-title">
          {currentProject.title}
        </h1>

        <p className="hero-description">
          {currentProject.description}
        </p>

        <button className="hero-button">
          Explore Project
          <span>→</span>
        </button>
      </div>

    </section>
  );
}

export default Hero;