const angebote = [
  {
    img: "grill",
    alt: "Grillgerichte",
    title: "Herzhaftes vom Grill",
    description:
      "Saftige Steaks & Fleischspezialitäten – frisch für euch zubereitet.",
  },
  {
    img: "potatoes",
    alt: "Bratkartoffeln",
    title: "Knusprige Beilagen",
    description:
      "Zum Beispiel frische Bratkartoffeln, Pommes und passende Beilagen.",
  },
  {
    img: "antipasti",
    alt: "Antipasti",
    title: "Antipasti",
    description:
      "Vielfältige Antipasti & mediterrane Spezialitäten für ein abwechslungsreiches Angebot.",
  },
];
export default function Angebot() {
  return (
    <section className="section" id="angebot">
      <p className="eyebrow dark">UNSER ANGEBOT</p>
      <h2>Gutes Essen verbindet.</h2>
      <div className="cards">
        {angebote.map((a) => (
          <article key={a.img}>
            <img src={`assets/${a.img}.jpg`} alt={a.alt} />
            <h3>{a.title}</h3>
            <p>{a.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
