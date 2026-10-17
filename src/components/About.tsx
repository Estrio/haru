
function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <p className="eyebrow">OUR PHILOSOPHY</p>

        <h2>Simple ingredients.<br />Thoughtful moments.</h2>

        <p>
          At HARU, we believe a good meal is more than what's on the plate.
          It's about seasonal ingredients, carefully prepared dishes, and
          sharing meaningful moments around the table.
        </p>

        <a href="#reservation" className="about-link">
          Come dine with us ↗
        </a>
      </div>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
          alt="An elegantly prepared restaurant dining table"
        />
      </div>
    </section>
  );
}

export default About;
