import project01 from "../assets/images/Projects/project-01.jpg";
import project02 from "../assets/images/Projects/project-02.jpg";
import project03 from "../assets/images/Projects/project-03.jpg";
import project04 from "../assets/images/Projects/project-04.jpg";
import project05 from "../assets/images/Projects/project-05.jpg";

export const projects = [
  {
    number: "01",
    title: "Casa Verde",
    category: "Residential",
    type: "Private Residence",
    location: "New Delhi",
    year: "2026",
    description:
      "A warm contemporary residence designed around natural materials, soft textures and generous living spaces.",
    detail:
      "A warm residential interior shaped around natural light, tactile materials and quiet moments of everyday living.",
    image: project01,
  },
  {
    number: "02",
    title: "The Courtyard House",
    category: "Residential",
    type: "Private Residence",
    location: "Gurugram",
    year: "2026",
    description:
      "A calm, light-filled home where considered planning and natural materials create a strong connection between indoor and outdoor spaces.",
    detail:
      "A contemporary home where architecture, landscape and interior spaces come together through a restrained material palette.",
    image: project02,
  },
  {
    number: "03",
    title: "No. 17",
    category: "Hospitality",
    type: "Urban Residence",
    location: "Mumbai",
    year: "2025",
    description:
      "A refined residential interior balancing clean architectural lines with warm materials and comfortable everyday living.",
    detail:
      "An intimate hospitality space designed around atmosphere, proportion and carefully controlled light.",
    image: project03,
  },
  {
    number: "04",
    title: "The Quiet Residence",
    category: "Residential",
    type: "Private Residence",
    location: "Bangalore",
    year: "2025",
    description:
      "A calm residential environment built around soft textures, natural materials and understated architectural details.",
    detail:
      "A calm residential environment built around soft textures, natural materials and understated architectural details.",
    image: project04,
  },
  {
    number: "05",
    title: "Material House",
    category: "Interior",
    type: "Interior Renovation",
    location: "New Delhi",
    year: "2025",
    description:
      "An exploration of material, texture and form where every element has been considered as part of a cohesive interior language.",
    detail:
      "An exploration of material, texture and form where every element has been considered as part of a cohesive interior language.",
    image: project05,
  },
];

export const featuredProjects = projects.slice(0, 3);

export function getProject(number) {
  return projects.find((project) => project.number === number);
}

export function getNextProject(number) {
  const index = projects.findIndex((project) => project.number === number);
  return projects[(index + 1) % projects.length];
}
