export default function Navbar() {
  return (
    <nav aria-label="Hauptnavigation">
      <a className="brand" href="#top">
        🔥 Miet-Dein-Imbiss
      </a>
      <div>
        <a href="#angebot">Angebot</a>
        <a href="#events">Events</a>
        <a href="#stellplatz">Stellplatz</a>
        <a className="pill" href="tel:+4917679950696">
          ☎ Anrufen
        </a>
      </div>
    </nav>
  );
}
