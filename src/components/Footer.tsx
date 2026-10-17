
function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div>
          <h2>HARU<span>.</span></h2>
          <p>Thoughtful food. Meaningful moments.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#reservation">Reservations</a>
        </div>

        <div className="footer-info">
          <p>Visit us</p>
          <span>123 Garden Street</span>
          <span>Monday – Sunday</span>
          <span>11:00 AM – 9:00 PM</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HARU Restaurant</p>
        <p>Made with care.</p>
      </div>
    </footer>
  );
}

export default Footer;
