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
          <span>05</span>
          <span>About the Studio</span>
        </div>


        <div className="studio-about-main">

          <h2>
            A design studio focused on how spaces are lived in.
          </h2>

          <p>
            Woody is an interior design studio creating residential spaces with
            a focus on functionality, materiality and timeless aesthetics.
          </p>

          <p>
            From new homes to renovations, we work closely with our clients to
            understand their lifestyle, preferences and requirements before
            developing a design that feels uniquely theirs.
          </p>

        </div>

      </div>

    </section>
  );
}

export default StudioAbout;
