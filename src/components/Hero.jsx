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
            Veranstaltungen in Stadthagen, Bad Nenndorf, Rodenberg, Lauenau,
            Barsinghausen, Wennigsen (Deister) und Wunstorf. Weitere Einsatzorte
            im Umkreis von etwa 50 km um Stadthagen sind nach Absprache möglich.
            Frisch zubereitete Grillgerichte, Bratkartoffeln und mediterrane
            Antipasti direkt vor Ort.
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
