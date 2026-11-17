import Hero from './components/Hero.jsx';
import Angebot from './components/Angebot.jsx';
import Events from './components/Events.jsx';
import Stellplatz from './components/Stellplatz.jsx';
import Kontakt from './components/Kontakt.jsx';
import Footer from './components/Footer.jsx';
import Impressum from './pages/Impressum.jsx';
import Datenschutz from './pages/Datenschutz.jsx';

export default function App() {
  // A Render Static Site rewrite minden közvetlen URL-t az index.html-re irányít.
  // Ehhez nincs szükség további router csomagra.
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/impressum') return <Impressum />;
  if (path === '/datenschutz') return <Datenschutz />;

  if (path !== '/') {
    return (
      <>
        <header className="legalHeader">
          <nav className="legalNav" aria-label="Navigation">
            <a className="brand" href="/">🔥 Miet-Dein-Imbiss</a>
          </nav>
        </header>
        <main className="legalMain">
          <div className="legalDocument">
            <h1 className="notFoundTitle">Seite nicht gefunden</h1>
            <p>Diese Seite existiert nicht.</p>
            <p><a href="/">Zur Startseite</a></p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

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
