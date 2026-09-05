import ArrowLink from "./ArrowLink";

function StudioIntro() {
  return (
    <section id="approach" className="studio-intro">

      <div className="studio-intro-label">
        <span>01</span>
        <span>Our Approach</span>
      </div>

      <div className="studio-intro-content">

        <h2>
          Interior design for homes that work beautifully.
        </h2>

        <div className="studio-intro-bottom">

          <p>
            Woody is a New Delhi interior design studio creating residential
            spaces through planning, materials, furniture and detail. We start
            with how your home needs to work, then shape every decision around
            the way you live.
          </p>

          <ArrowLink to="/studio">About the Studio</ArrowLink>

        </div>

      </div>

    </section>
  );
}

export default StudioIntro;
