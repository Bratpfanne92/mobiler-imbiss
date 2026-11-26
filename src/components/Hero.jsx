import Navbar from "./Navbar.jsx";
export default function Hero() {
  return (
    <header className="hero" id="top">
      <Navbar />
      <div className="heroGrid">
        <section>
          <p className="eyebrow">FEIERN · FIRMENFESTE · VERANSTALTUNGEN</p>
          <h1>
            MOBILER IMBISS
            <br />
            <em>für dein Event</em>
          </h1>
          <p className="lead">
            Mobiler Imbiss und Catering für Feiern, Firmenfeste und
            Veranstaltungen rund um Bad Nenndorf und Barsinghausen. Herzhaft vom
            Grill, knusprige Bratkartoffeln und mediterrane Antipasti – frisch
            zubereitet direkt vor Ort.
          </p>
          <div className="actions">
            <a className="cta" href="tel:+4917679950696">
              Jetzt anfragen
            </a>
            <a className="ghost" href="#angebot">
              Unser Angebot ↓
            </a>
          </div>
        </section>
        <div className="heroPhoto">
          <img
            src="assets/grill.jpg"
            alt="Frisch gegrillte Fleischspezialitäten"
          />
          <span>
            Lecker.
            <br />
            Frisch.
            <br />
            Regional.
          </span>
        </div>
      </div>
    </header>
  );
}
