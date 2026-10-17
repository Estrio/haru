function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        HARU<span>.</span>
      </a>


    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#menu">Menu</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>

    <a className="nav-button" href="#contact">
      Visit Us
    </a>

    </nav>
  );
}

export default Navbar;