function FeaturedDish() {
  return (
    <section className="featured-dish" id="menu">
      <img
        className="featured-image"
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=85"
        alt="A freshly prepared colorful meal"
      />

      <div className="featured-caption">
        <p className="eyebrow">MADE FRESH, SERVED WITH CARE</p>
        <h2>A little something special.</h2>
        <p>
          Thoughtfully prepared dishes, fresh ingredients,
          and flavors worth coming back for.
        </p>
      </div>
    </section>
  );
}

export default FeaturedDish;