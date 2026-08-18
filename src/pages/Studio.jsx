import studioImage from "../assets/images/studio.jpg";
import ArrowLink from "../components/ArrowLink";

function Studio() {
  return (
    <main className="studio-page">

      {/* HERO */}

      <section className="studio-page-hero">

        <div className="studio-page-label">
          <span>03</span>
          <span>The Studio</span>
        </div>

        <div className="studio-page-heading">
          <h1>
            We create
            <br />
            <em>spaces with soul.</em>
          </h1>

          <p>
            Woody is an interior architecture and design studio
            creating considered spaces through material,
            proportion, light and atmosphere.
          </p>
        </div>

      </section>


      {/* INTRO */}

      <section className="studio-page-intro">

        <div className="studio-page-intro-label">
          About Woody
        </div>

        <div className="studio-page-intro-content">

          <h2>
            Design should feel
            <br />
            <em>effortless.</em>
          </h2>

          <div className="studio-page-intro-text">

            <p>
              We believe the best interiors don't demand
              attention. They reveal themselves slowly -
              through light falling across a surface,
              the texture of a material, or the way a room
              feels at a particular hour.
            </p>

            <p>
              Our work brings together architecture,
              interiors and objects to create spaces that
              are deeply personal, functional and enduring.
            </p>

          </div>

        </div>

      </section>


      {/* IMAGE */}

      <section className="studio-page-image">

        <img
          src={studioImage}
          alt="Woody interior design studio"
        />

        <div className="studio-page-image-caption">
          Interior / Material / Light
        </div>

      </section>


      {/* PHILOSOPHY */}

      <section className="studio-philosophy">

        <div className="studio-philosophy-header">

          <div>
            <span>04</span>
            <span>Our Philosophy</span>
          </div>

          <p>
            Four principles guide every space we create.
          </p>

        </div>


        <div className="studio-philosophy-list">

          <article>
            <span>01</span>

            <h3>Light</h3>

            <p>
              Natural light is treated as a material -
              shaping atmosphere, movement and the
              experience of a room.
            </p>
          </article>


          <article>
            <span>02</span>

            <h3>Material</h3>

            <p>
              Honest materials, tactile surfaces and
              thoughtful details give each space its
              own character.
            </p>
          </article>


          <article>
            <span>03</span>

            <h3>Proportion</h3>

            <p>
              Balance, scale and rhythm create spaces
              that feel natural rather than designed.
            </p>
          </article>


          <article>
            <span>04</span>

            <h3>Function</h3>

            <p>
              Beauty has purpose. Every decision begins
              with how people will actually live in
              the space.
            </p>
          </article>

        </div>

      </section>


      {/* APPROACH */}

      <section className="studio-approach">

        <div className="studio-approach-title">

          <span>05</span>

          <h2>
            From first thought
            <br />
            to <em>final detail.</em>
          </h2>

        </div>


        <div className="studio-approach-list">

          <div>
            <span>01</span>

            <h3>Discover</h3>

            <p>
              Understanding the people, place and
              possibilities behind every project.
            </p>
          </div>


          <div>
            <span>02</span>

            <h3>Concept</h3>

            <p>
              Translating ideas into a clear visual
              and spatial direction.
            </p>
          </div>


          <div>
            <span>03</span>

            <h3>Design</h3>

            <p>
              Developing materials, details, furniture
              and architecture into one language.
            </p>
          </div>


          <div>
            <span>04</span>

            <h3>Realise</h3>

            <p>
              Working closely through execution to
              make sure the original idea survives
              every detail.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="studio-page-cta">

        <span>Start a conversation</span>

        <h2>
          Have a space
          <br />
          <em>in mind?</em>
        </h2>

        <ArrowLink to="/contact" className="studio-page-cta-link" variant="outline">
          Start a Project
        </ArrowLink>

      </section>

    </main>
  );
}

export default Studio;
