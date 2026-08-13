import Hero from "../components/Hero";
import StudioIntro from "../components/StudioIntro";
import FeaturedProjects from "../components/FeaturedProjects";
import Services from "../components/Services";
import StudioAbout from "../components/StudioAbout";
import Testimonials from "../components/Testimonials";
import ConsultationCTA from "../components/ConsultationCTA";

function Home() {
  return (
    <>
      <Hero />

      <StudioIntro />

      <FeaturedProjects />

      <Services />

      <StudioAbout />

      <Testimonials />

      <ConsultationCTA />
    </>
  );
}

export default Home;