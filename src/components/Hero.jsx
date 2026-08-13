import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import project01 from "../assets/images/projects/project-01.jpg";
import project02 from "../assets/images/projects/project-02.jpg";
import project03 from "../assets/images/projects/project-03.jpg";

const projects = [
  {
    id: "01",
    image: project01,
    category: "Residential",
    title: "Casa Verde",
    description:
      "A warm residential interior shaped around natural light, tactile materials and quiet moments of everyday living.",
  },
  {
    id: "02",
    image: project02,
    category: "Residential",
    title: "The Courtyard House",
    description:
      "A contemporary home where architecture, landscape and interior spaces come together through a restrained material palette.",
  },
  {
    id: "03",
    image: project03,
    category: "Hospitality",
    title: "No. 17",
    description:
      "An intimate hospitality space designed around atmosphere, proportion and carefully controlled light.",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentProject = projects[currentSlide];

  /* Preload hero images */

  useEffect(() => {
    projects.forEach((project) => {
      const image = new Image();
      image.src = project.image;
    });
  }, []);


  /* Automatic carousel */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (current) => (current + 1) % projects.length
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);


  return (
    <section
      className="hero"
      aria-label="Featured project"
    >

      {/* HERO IMAGE */}

      <div className="hero-image-wrapper">

        <img
          key={currentSlide}
          src={currentProject.image}
          alt={currentProject.title}
          className="hero-image"
        />

      </div>


      {/* OVERLAY */}

      <div
        className="hero-overlay"
        aria-hidden="true"
      />


      {/* CONTENT */}

      <div
        className="hero-content"
        key={currentSlide}
      >

        <p className="hero-category">
          {currentProject.category}
        </p>

        <h1 className="hero-title">
          {currentProject.title}
        </h1>

        <p className="hero-description">
          {currentProject.description}
        </p>

        <Link
          to={`/projects/${currentProject.id}`}
          className="hero-button"
        >
          <span>Explore Project</span>
          <span>↗</span>
        </Link>

      </div>

    </section>
  );
}

export default Hero;