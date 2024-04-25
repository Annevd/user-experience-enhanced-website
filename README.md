> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Enhanced website
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Ontwerp en maak een website voor een opdrachtgever waarbij je de website verrijkt volgens het principe van progressive enhancement

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
Voor deze opdracht lag de focus op het enhancen van je website met onder andere client-side Javascript, Responsive Images en het voorkomen van Cumulative Layout Shifts. 

Ik heb de like interactie van de vorige sprint enhanced met client-side Javascript. Je kan nu een playlist liken zonder dat de pagina gerefreshed wordt zodat je als gebruiker direct feedback krijgt.

Door het voorkomen van Cumulative Layout Shifts en door Responsive Images toe te passen heb ik de performance van de website verbeterd.

<!-- Voeg een mooie poster visual toe 📸 -->

<img height= 500 width= 250 src="https://github.com/Annevd/the-web-is-for-everyone-interactive-functionality/assets/144004647/b5aa2903-80ff-4444-b36a-26928aeac831">
<img height= 500 width= 250 src="https://github.com/Annevd/the-web-is-for-everyone-interactive-functionality/assets/144004647/c656bf47-f226-4ef5-9366-f8f1183d2d1c">
<img height= 500 width= 250 src="https://github.com/Annevd/the-web-is-for-everyone-interactive-functionality/assets/144004647/539a068a-49b8-4393-b351-e5af505e5490">
<img height= 500 width= 250 src="https://github.com/Annevd/the-web-is-for-everyone-interactive-functionality/assets/144004647/498bd02e-7882-4395-b0d3-2023aa702468">
<!-- Voeg een link toe naar Github Pages 🌐-->

## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->
Om deze pagina live te bekijken kan je klikken op de livelink in de About sectie van deze repository.
Omdat we zijn begonnen met het bouwen van de lessons pagina in plaats van de homepage, dien je eerst in het menu rechtsonder op deze pagina te klikken.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
Bij deze leertaak heb ik gebruik gemaakt van het principe _Progressive Enhancement_. Dit houdt in dat je werkt in verschillende lagen.

Namelijk:

1. Core functionality: de content laag (bijv. HTML)
2. Layout as an enhancement: de presentatie laag (bijv. basic CSS)
3. Enhance!: de laatste laag (bijv. extra client-side Javascript)

Door gebruik te maken van progressive enhancement zorg je er dus voor dat de eerste laag altijd en voor iedereen werkt, mochten de andere lagen het niet doen voor een of andere reden.

Bij deze leertaak heb ik dit principe ook toegepast op verschillende dingen.

De focus lag op het doen van een fetch via client-side Javascript. Dit zorgt ervoor dat er geen refresh is na het uitvoeren van een interactie en dat de gebruiker dus gelijk feedback krijgt van de uitgevoerde interactie.

Ook zijn we bezig geweest met verschillende metrics om de performance van onze websites te verbeteren, bijvoorbeeld Cumulative Layout Shifts. Dit heb ik in mijn project toegepast door gebruik te maken van vaste hoogte en breedte waardes in de HTML om layout shifts te voorkomen. 

Daarnaast heb ik een loading state toegevoegd aan mijn interactie van de like button, zodat de gebruiker feedback krijgt dat de pagina aan het laden is en niet in ontwetendheid zit.

Tot slot heb ik gebruik gemaakt van Responsive Images, waar je gebruikt maakt van een `<picture>` en `<source srcset="" type="image/'type'">` om afbeeldingen te optimaliseren wanneer dat mogelijk is. Doordat de afbeeldingen kleiner worden zal je website sneller laden en zal dus de performance score hoger worden.

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
1. Installeer [NodeJs](https://nodejs.org/en)
2. Fork deze repository
3. Open het in een code editor naar keuze
4. Run de command ```npm install```
5. Run de command `npm start`
6. Klik op de localhost link en begin met coden!

## Bronnen

- [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Frontend Performance Checklist van Smashing Magazine](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
