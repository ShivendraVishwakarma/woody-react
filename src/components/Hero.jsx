import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import project01 from "../assets/images/Projects/project-01.jpg";
import project02 from "../assets/images/Projects/project-02.jpg";
import project03 from "../assets/images/Projects/project-03.jpg";

const projects = [
  {
    id: "01",
    image: project01,
    category: "Residential",
    title: "Casa Verde",
    description:
      "A warm residential interior shaped around natural light, tactile materials and quiet moments of everyday living.",
    meta: ["New Delhi", "Private Residence", "2026"],
  },
  {
    id: "02",
    image: project02,
    category: "Residential",
    title: "The Courtyard House",
    description:
      "A contemporary home where architecture, landscape and interior spaces come together through a restrained material palette.",
    meta: ["Gurugram", "Residential", "2026"],
  },
  {
    id: "03",
    image: project03,
    category: "Hospitality",
    title: "No. 17",
    description:
      "An intimate hospitality space designed around atmosphere, proportion and carefully controlled light.",
    meta: ["Mumbai", "Hospitality", "2025"],
  },
];

const studioStats = [
  { value: "42+", label: "Completed spaces" },
  { value: "9", label: "Cities styled" },
  { value: "12 yrs", label: "Design practice" },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentProject = projects[currentSlide];

  useEffect(() => {
    projects.forEach((project) => {
      const image = new Image();
      image.src = project.image;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % projects.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" aria-label="Featured project">
      <div className="hero-image-wrapper">
        {projects.map((project, index) => (
          <img
            key={project.id}
            src={project.image}
            alt={project.title}
            className={`hero-image${
              index === currentSlide ? " hero-image-active" : ""
            }`}
            aria-hidden={index !== currentSlide}
          />
        ))}
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content" key={currentSlide}>
        <p className="hero-category">{currentProject.category}</p>

        <h1 className="hero-title">{currentProject.title}</h1>

        <p className="hero-description">{currentProject.description}</p>

        <div className="hero-actions">
          <Link to={`/projects/${currentProject.id}`} className="hero-button">
            <span>Explore Project</span>
            <ArrowUpRight size={17} strokeWidth={1.7} aria-hidden="true" />
          </Link>

          <Link to="/contact" className="hero-text-link">
            Book Consultation
          </Link>
        </div>
      </div>

      <div className="hero-panel" aria-label="Project details">
        <div className="hero-panel-meta">
          {currentProject.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="hero-progress">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Show ${project.title}`}
            />
          ))}
        </div>
      </div>

      <div className="hero-stats" aria-label="Studio highlights">
        {studioStats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
