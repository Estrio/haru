
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureDish from "./components/FeatureDish";
import Menu from "./components/Menu";
import ReservationForm from "./components/Reservation";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeatureDish />
      <Menu />
      <ReservationForm />
      <Footer />
    </>
  );
}

export default App;
