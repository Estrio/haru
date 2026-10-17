
function Reservation() {
  return (
    <section className="reservation-section" id="reservation">
      <p className="eyebrow">YOUR TABLE AWAITS</p>
      <h2>Reserve a table.</h2>
      <p className="reservation-description">
        Join us for a thoughtful meal, made with care.
      </p>

      <form className="reservation-form">
        <div className="reservation-field">
          <label htmlFor="guestName">Full name</label>
          <input id="guestName" type="text" placeholder="Your name" required />
        </div>

        <div className="reservation-field">
          <label htmlFor="guestEmail">Email address</label>
          <input id="guestEmail" type="email" placeholder="you@example.com" required />
        </div>

        <div className="reservation-field">
          <label htmlFor="reservationDate">Date</label>
          <input id="reservationDate" type="date" required />
        </div>

        <div className="reservation-field">
          <label htmlFor="guestCount">Guests</label>
          <select id="guestCount" defaultValue="2">
            {[1, 2, 3, 4, 5, 6].map((count) => (
              <option key={count} value={count}>
                {count} {count === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <button type="button" className="reservation-button">
          Request a reservation ↗
        </button>
      </form>
    </section>
  );
}

export default Reservation;
