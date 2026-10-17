function Hero() {
  return(
    <section className="hero" id="home">
      <p className="eyebrow">FRESH INGREDIENTS. MADE WITH CARE.</p>

      <h1>
        Good food is the foundation of genuine happiness.
        <br />
        Better <span>moments.</span>
      </h1>

      <p className="hero-description">
        Discover comforting flavors, freshly prepared dishes, and a warm atmosphere that will make you feel right at home. Our menu is crafted with care, using only the finest ingredients to create meals that are both delicious and satisfying.
      </p>

      <div className="hero-actions">
        <a className="primary-button" href="#menu">
          Explore Our Menu ↗
        </a>

        <a className="secondary-button" href="#about">
          Our Story
        </a>
      </div>
    </section>
  )
}

export default Hero;