import { Link } from "react-router-dom";
import studioImage from "../assets/images/studio.jpg";

function StudioAbout() {
  return (
    <section className="studio-about">

      {/* IMAGE */}

      <div className="studio-about-image-wrap">

        <img
          src={studioImage}
          alt="Woody interior design studio"
          className="studio-about-image"
        />

        <span className="studio-about-image-label">
          The Studio
        </span>

      </div>


      {/* CONTENT */}

      <div className="studio-about-content">

        <div className="studio-about-label">
          <span>04</span>
          <span>The Studio</span>
        </div>


        <div className="studio-about-main">

          <h2>
            Designing spaces
            <br />
            <em>with intention.</em>
          </h2>

          <p>
            We create interiors that feel considered, personal,
            and timeless. Every space is shaped through a careful
            balance of architecture, material, light, and detail.
          </p>

          <Link
            to="/studio"
            className="studio-about-link"
          >
            About the studio
            <span>↗</span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default StudioAbout;