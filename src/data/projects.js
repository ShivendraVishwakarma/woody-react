import project01 from "../assets/images/Projects/project-01.jpg";
import project02 from "../assets/images/Projects/project-02.jpg";
import project03 from "../assets/images/Projects/project-03.jpg";
import project04 from "../assets/images/Projects/project-04.jpg";
import project05 from "../assets/images/Projects/project-05.jpg";
import project06 from "../assets/images/Projects/project-06.jpg";
import project07 from "../assets/images/Projects/project-07.jpg";
import project08 from "../assets/images/Projects/project-08.jpg";
import project09 from "../assets/images/Projects/project-09.jpg";

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
  {
    number: "06",
    title: "Lightwell Apartment",
    category: "Residential",
    type: "City Apartment",
    location: "Pune",
    year: "2024",
    description:
      "A compact city home opened up through warm oak, layered lighting and carefully planned storage.",
    detail:
      "A city apartment shaped around flexible living, warm timber and a quiet palette that lets daylight lead.",
    image: project06,
  },
  {
    number: "07",
    title: "The Garden Room",
    category: "Residential",
    type: "Weekend Home",
    location: "Alibaug",
    year: "2024",
    description:
      "A relaxed weekend home that brings garden views, natural stone and indoor-outdoor living into balance.",
    detail:
      "A weekend retreat designed for slower days, with open thresholds, tactile stone and a restrained furniture plan.",
    image: project07,
  },
  {
    number: "08",
    title: "Atelier 04",
    category: "Commercial",
    type: "Creative Workplace",
    location: "Bangalore",
    year: "2024",
    description:
      "A focused workplace where flexible planning and considered materials support creative collaboration.",
    detail:
      "A compact workplace balancing shared work zones, private focus rooms and a material palette built for everyday use.",
    image: project08,
  },
  {
    number: "09",
    title: "Monsoon House",
    category: "Residential",
    type: "Private Residence",
    location: "Goa",
    year: "2023",
    description:
      "A tropical residence shaped by cross ventilation, soft natural finishes and an easy connection to the landscape.",
    detail:
      "A relaxed coastal home where shaded courtyards, natural textures and simple forms create a calm daily rhythm.",
    image: project09,
  },
];

export const featuredProjects = projects.slice(0, 6);

export function getProject(number) {
  return projects.find((project) => project.number === number);
}

export function getNextProject(number) {
  const index = projects.findIndex((project) => project.number === number);
  return projects[(index + 1) % projects.length];
}
