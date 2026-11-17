import Hero from "./components/Hero.jsx";
import Angebot from "./components/Angebot.jsx";
import Events from "./components/Events.jsx";
import Stellplatz from "./components/Stellplatz.jsx";
import Kontakt from "./components/Kontakt.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Angebot />
        <Events />
        <Stellplatz />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
