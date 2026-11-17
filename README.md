# Mobiler Imbiss – Vite + React

A korábbi statikus landing page React-komponensekre bontott változata, eredeti képekkel és szöveggel.

## Indítás Windows 11 / VS Code alatt

1. Telepítsd a Node.js LTS verzióját.
2. Nyisd meg a mappát VS Code-ban, majd nyiss terminált.
3. `npm install`
4. `npm run dev`
5. Nyisd meg a terminálban kiírt helyi címet (általában `http://localhost:5173`).

## Éles build

`npm run build` → `dist/` mappa. A Render Static Site publish directory értéke `dist`, build command: `npm install && npm run build`.

GitHub Pages: a Vite `base: './'` relatív assetútvonalakat használ, így a `dist/` tartalma alkönyvtárban is kiszolgálható. GitHub Actions deploy esetén a buildelt `dist/` mappát publikáld.

## Figyelem

A projekt az előző landing page tartalmát tartja meg. Az Impressum és Datenschutz még hiányzik; nyilvános üzleti publikálás előtt a vállalkozó valós adataival ki kell egészíteni. Az állandó Stellplatz-kereső szöveget publikálás előtt ellenőrizd, hogy még aktuális-e.
