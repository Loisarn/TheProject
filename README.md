# TheProject
Inlämning 1, Moderna Webbapplikationer

## How to use
För att få programmet att fungera måste man installera node.js, om man inte redan har det installerat. För att sedan kunna köra programmet krävs det att man installerar parcel, react, react-router-dom och JSON Server. 
(exempel:  npm install --save-dev parcel, react, react-router-dom, json-server ) 
(ett litet tips är att skriva npm install json-server -p 3000 -w data/db.json)

för att starta programmet efter att man har installerat nödvändiga paket skriver man  'npm start' i terminalen. Tryck upp en till terminal och skriv där i 'npm run server' för att starta json-servern, annars får användaren inte ut information på sidan.

(disclaimer: när jag installerade hade jag problem i package.json och var tvungen att ändra, om detta skulle hända andra så kommer här information om vad man kan behöva ändra):

  "name": "theproject",

  "version": "1.0.0",

  "description": "Inlämning 1, Moderna Webbapplikationer",

  "source":"src/app.html",  <-

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
## Tjänster
Jag har valt att använda mig av JSON Server och Axios, när det kommer till REST API. Mina anrop görs i mappen som är döpt till api. I den innehåller filer som till exempel "FordonList, CreateFordon och ViewFordon. Just nu funkar bara anropet GET & DELETE, som hämtar/raderar informationen, och dessa anrop kommer från FordonList och BostadList.


## Kravlista för källkodsprojektet

[:heavy_check_mark:]	Ditt inlämnade arbete ska fortsätta från samma källkodsprojekt (repo) som tidigare inlämningsuppgifter. app.html ska vara uppdaterad med din vidareutvecklade prototyp	

[:heavy_check_mark:] Din readme.md fil ska uppdateras med korrekta instruktioner för hur din applikation ska startas och varefter efterföljande krav ska kunna testas
	
[:heavy_check_mark:] I din källkod ska readme.md-filen under rubriken "externa bibliotek" innehålla en lista av dina installerade tredjepartsbibliotek. Förklara kort varför de används	

[:heavy_check_mark:] Readme.md ska även innehålla rubriken Tjänster där du listar och förklarar de Webb-API:er som anropas av din prototyp. - vart i koden & varför	

[:heavy_check_mark:] Med din versionshanteringsteknik ska det vara tydligt hur projektet kan återställas till en variant där ditt valda tredjepartspaket inte är installerat, och även där det läggs till i versionshistoriken	

[:heavy_check_mark:] Koden ska bestå av minst 12 React komponenter du skrivit själv med hjälp av JSX.	

[:heavy_check_mark:] Välj och installera ett färdigt javascript-paket i ditt källodsprojekt som används tillsammans med React.	

[:heavy_check_mark:] Din prototyp ska innehålla minst ett användningstillfälle av javascript biblioteket när den används via en webbläsare.	

[:heavy_check_mark:] Din applikation ska hämta och visa information för användaren som hämtas via anrop till ett externt REST API.	

[:heavy_check_mark:] Din applikation ska skicka information skapad via interaktion med användaren till ett externt REST API.	

[:heavy_check_mark:] Kommunikationen till externa Webb-API:er i applikationen ska vara väl avgränsat från applikationens UI med hjälp av lämplig kodstruktur.	

[ ] Minst två av dina egna komponenter ska utnyttja (läsa och/eller spara) information lokalt i webbläsaren via en datalagringsmetod som inte är local storage.	

[:heavy_check_mark:] Minst en av dina egna komponenter ska rendera och använda sig av en kontrollerad form komponent (i.e. en "Controlled Component")	

[:heavy_check_mark:] Minst fem av dina komponenter ska använda sig av state eller props för att rendera tillståndsbaserad information. (i.e. "conditional rendering")	
  

## Kravlista för rapporten
Svara på följande frågor i din inlämnade pdf-fil, varje fråga ska besvaras under sin egna rubrik.

[:heavy_check_mark:] Rubrik: Mitt bibliotek
Beskriv och förklara användningsområdet av det ramverk/bibliotek utöver React som du använt i din applikation. (en till två paragrafer)
	
[:heavy_check_mark:] Rubrik: Om extern datalagring och React
Förklara med egna ord vad som är viktigt att tänka på vid användningen av extern datalagring tillsammans med React. (en till två paragrafer).

[:heavy_check_mark:] Rubrik: Om URL:en
När vi gör förändringar i vår applikation, vad är viktigt att tänka på om vi använt webbläsaradressen (URL) som en datalagringsplats för klienten? (max. 1 paragraf).


[:heavy_check_mark:] Rubrik: Mitt val av bibliotek
Motivera varför ditt valda bibliotek är ett lämpligt val för ändamålet. Fundera både över paketets utformning, funktionalitet och dess bakomliggande utgivare. (svara utförligt)


[:heavy_check_mark:] Rubrik: Min kodstruktur
Vilken kodstruktur och ev. designmönster har du använt dig av i koden för att separera applikationens UI från kommunikationen med REST API:er i källkoden, varför är detta en lämplig struktur? (svara utförligt)

	
[:heavy_check_mark:] Rubrik: Min prototyps externa datalagring
Till vilka ändamål använder du nu i din prototyp extern datalagring - båda lokal och via ev. API:er. Motivera valet av dessa sett till användarupplevelsen av din prototyp. Finns det fler platser där extern datalagring vore lämpligt? (svara utförligt)
 



