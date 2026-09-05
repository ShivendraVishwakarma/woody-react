import Hero from "../components/Hero";
import StudioIntro from "../components/StudioIntro";
import FeaturedProjects from "../components/FeaturedProjects";
import Services from "../components/Services";
import StudioAbout from "../components/StudioAbout";
import Testimonials from "../components/Testimonials";
import ConsultationCTA from "../components/ConsultationCTA";
import {
  HomepagePhilosophy,
  HomepageProcess,
} from "../components/PhilosophyProcess";

function Home() {
  return (
    <>
      <Hero />

      <StudioIntro />

      <FeaturedProjects />

      <Services />

      <HomepagePhilosophy />

      <StudioAbout />

      <HomepageProcess />

      <Testimonials />

      <ConsultationCTA />
    </>
  );
}

export default Home;
