import ArrowLink from "./ArrowLink";

function StudioIntro() {
  return (
    <section className="studio-intro">

      <div className="studio-intro-label">
        <span>01</span>
        <span>Our Approach</span>
      </div>

      <div className="studio-intro-content">

        <h2>
          We create interiors that feel personal, refined, and effortless.
        </h2>

        <div className="studio-intro-bottom">

          <p>
            Every space begins with understanding how you live. From the
            overall layout to the smallest detail, we bring together
            proportion, light, materials and furniture to create interiors that
            feel cohesive and distinctly yours.
          </p>

          <ArrowLink
            to="/studio"
            className="studio-intro-link"
          >
            About the Studio
          </ArrowLink>

        </div>

      </div>

    </section>
  );
}

export default StudioIntro;
