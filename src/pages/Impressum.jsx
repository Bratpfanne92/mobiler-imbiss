import LegalLayout from '../components/LegalLayout.jsx';

export default function Impressum() {
  return (
    <LegalLayout title="Impressum" eyebrow="RECHTLICHE INFORMATIONEN">
      <p className="legalIntro">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</p>

      <h2>Diensteanbieter</h2>
      <address>
        Antonio Malatesta<br />
        Rotrehre 2<br />
        31542 Bad Nenndorf<br />
        Deutschland
      </address>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href="tel:+4917679950696">+49 176 79950696</a><br />
        E-Mail: <a href="mailto:antoniomalatesta@web.de">antoniomalatesta@web.de</a>
      </p>
    </LegalLayout>
  );
}
