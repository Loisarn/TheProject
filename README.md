# TheProject

Moderna Webbapplikationer

## How to use

För att få programmet att fungera måste man installera node.js, om man inte redan har det installerat. För att sedan kunna köra programmet krävs det att man installerar parcel, react, react-router-dom, react-router och JSON Server.
(exempel: npm install --save-dev parcel, react, react-router-dom, react-router, json-server )
(ett litet tips är att skriva npm install json-server -p 3000 -w data/db.json)

för att starta programmet efter att man har installerat nödvändiga paket skriver man 'npm start' i terminalen. Tryck upp en till terminal och skriv där i 'npm run server' för att starta json-servern, annars får användaren inte ut information på sidan.

(disclaimer: när jag installerade hade jag problem i package.json och var tvungen att ändra, om detta skulle hända andra så kommer här information om vad man kan behöva ändra):

"name": "theproject",

"version": "1.0.0",

"description": "Inlämning 1, Moderna Webbapplikationer",

"source":"src/app.html", <-

"scripts": {

    "start": "parcel", <-

    "dev": "lite-server",

    "server": "json-server -p 3000 -w data/db.json"

## Project Description

Tredje inlämningen handlar om att interagera med REST-API:et och att dyka ner i fler externa bibliotek. I denna uppgift har vi även jobbat med react-router.

## Technologies used

- Html
- CSS
- Javascript
- Parcel
- React
- Axios

## Externa biblioteket

- Material UI = är ett UI bibliotek som låter en använda bland annat ikoner till komponenterna, utan att man behöver skriva mycket kod.
- React-detect-offline = för att användaren ska kunna använda sig av appen offline, dock inte implementerad.
- Axios = Detta bibliotek används istället för fetch.
- FontAwesome = För att kunna hämta ikoner.
- (JSON SERVER)
- Parcel = För att transpilera koden.
- Lite-server = refreshar sidan när man ändrar något i html eller javascript.
- bootstrap = För att slippa skriva mycket CSS kod.
- PropTypes

## Tjänster

Jag har valt att använda mig av JSON Server och Axios, när det kommer till REST API. Mina anrop görs i mappen som är döpt till api. I den innehåller filer som till exempel "FordonList, CreateFordon och ViewFordon. Här kan man lägga till, radera, uppdatera och kolla Id.

## Kravlista för källkodsprojektet

[:heavy_check_mark:] Ditt inlämnade arbete ska fortsätta från samma källkodsprojekt (repo) som tidigare inlämningsuppgifter. app.html ska vara uppdaterad med din vidareutvecklade prototyp och readme.md ska uppdateras efter behov för att kunna starta och testa applikationen.

[:heavy_check_mark:] Källkoden ska bestå av minst 15 React komponenter du skrivit själv med hjälp av JSX.

[:heavy_check_mark:] En av dina React komponenter ska vara en "Error Boundry"-komponent, som används korrekt i komponent-trädet

[:heavy_check_mark:] Paketet Prop-Types ska vara installerat och användas i applikationen på minst 4 st av dina egna komponenter - välj de mest relevanta.

[:heavy_check_mark:] En av dina nya komponenter ska vara en generellt återanvändningsbar komponent som är enkel att återanvända i en annan applikation med viss avancerad funktionalitet. Komponentens kod ska vara dokumenterad.

[:heavy_check_mark:] Antigen Redux eller Reacts Context-API ska användas för att skapa ett gemensamt tillstånd mellan flera olika komponenter oberoende deras placering i React-trädet

[:heavy_check_mark:] Din applikation ska vid användning på minst fyra tillfällen använda sig av server kommunikation med ett REST API

[:heavy_check_mark:] Kommunikationen med REST-API:et ska implementerat väl avgränsad från UI-logiken (komponenter) och nyttja lämplig felhantering för om API:et inte är tillgänglig eller ger ett oväntat svar

## Kravlista för rapporten

Svara på följande frågor i din inlämnade pdf-fil, varje fråga ska besvaras under sin egna rubrik.

[:heavy_check_mark:] Rubrik: Min återanvändningsbara komponent

Vilken komponent har du fokuserat på att göra återanvändningsbar? Beskriv och motivera komponentens syfte, beroenden/förutsättningar och vilka på vilket sätt den är återanvändningsbar (minst 2 paragrafer)

[:heavy_check_mark:] Rubrik: Kodstruktur och felhantering

Beskriv och motivera den kodstruktur du använt för att strukturera anrop från din klientapplikation till REST-API:et, har du gjort förbättringar från din förra inlämning beskriv gärna dem. Vilka fel kan tänkas uppstå och hur hanteras fel i förhållande till dina React-komponenter? (ung. 2 till 3 paragrafer)

[:heavy_check_mark:] Rubrik: Min Error Boundry

Hur har du designat din Error-boundry komponent? Motivera hur den bidrar med en bättre upplevelse för användaren vid fel - vilka möjliga steg kan användaren ta om Error Boundry komponenten fångar ett fel? (minst 2 paragrafer)
