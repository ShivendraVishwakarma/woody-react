import { Link } from "react-router-dom";

function StudioIntro() {
  return (
    <section className="studio-intro">

      <div className="studio-intro-label">
        <span>01</span>
        <span>Our Approach</span>
      </div>

      <div className="studio-intro-content">

        <h2>
          We create interiors
          <br />
          that feel considered,
          <br />
          timeless, and personal.
        </h2>

        <div className="studio-intro-bottom">

          <p>
            From the first sketch to the final detail, we design spaces
            that balance architecture, material, light, and the way
            people actually live.
          </p>

          <Link
            to="/studio"
            className="studio-intro-link"
          >
            Discover our studio
            <span>↗</span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default StudioIntro;