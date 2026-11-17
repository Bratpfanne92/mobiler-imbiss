import { useEffect } from 'react';
import Footer from './Footer.jsx';

export default function LegalLayout({ title, eyebrow, children }) {
  useEffect(() => {
    document.title = `${title} | Mobiler Imbiss – Antonio Malatesta`;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', `${title} des mobilen Imbiss von Antonio Malatesta in Bad Nenndorf.`);
    }
  }, [title]);

  return (
    <>
      <header className="legalHeader">
        <nav className="legalNav" aria-label="Navigation auf den Rechtstextseiten">
          <a className="brand" href="/">🔥 Miet-Dein-Imbiss</a>
          <a className="legalBack" href="/">← Zur Startseite</a>
        </nav>
        <div className="legalHeaderInner">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
      </header>
      <main className="legalMain" id="hauptinhalt">
        <article className="legalDocument">{children}</article>
      </main>
      <Footer />
    </>
  );
}
