# TheProject
Inlämning 1, Moderna Webbapplikationer

## How to use
För att få programmet att fungera måste man installera node.js, om man inte redan har det installerat. För att sedan kunna köra programmet krävs det att man installerar parcel, react, react-router-dom och react-dom. 
(exempel:  npm install --save-dev parcel, react, react-router-dom, react-dom ) 
sedan skriver man cd src (så att man kommer in i rätt mapp) för att sedan skriva npm start.

(disclaimer: när jag installerade hade jag problem i package.json och var tvungen att ändra, om detta skulle hända andra så kommer här information om vad man kan behöva ändra):

  "name": "theproject",

  "version": "1.0.0",

  "description": "Inlämning 1, Moderna Webbapplikationer",

  "source":"src/app.html",  <-

  "scripts": {

    "start": "parcel", <-
    
    "dev": "lite-server"

## Project Description
Andra inlämningen handlar om att bygga vidare på den första inlämningen. En första prototyp på idén som man har. Vi får även lära oss att använda Parcel för att kunna transpilera koden. Det är även en introduktion till React och vi får lära oss att koda komponenter, använda hooks och använda oss av JSX syntax.

<img width="1180" alt="Skärmavbild 2022-04-07 kl  12 22 09" src="https://user-images.githubusercontent.com/89778044/162179946-ea6c33f8-676f-4832-8952-f513bb68bebb.png">

## Technologies used
- Html
- CSS
- Javascript
- Parcel
- React

## Externa biblioteket

## Tjänster

## Kravlista för källkodsprojektet

[:heavy_check_mark:]	Ditt inlämnade arbete ska fortsätta från samma källkodsprojekt (repo) som tidigare inlämningsuppgifter. app.html ska vara uppdaterad med din vidareutvecklade prototyp	

[ ] Din readme.md fil ska uppdateras med korrekta instruktioner för hur din applikation ska startas och varefter efterföljande krav ska kunna testas
	
[ ] I din källkod ska readme.md-filen under rubriken "externa bibliotek" innehålla en lista av dina installerade tredjepartsbibliotek. Förklara kort varför de används	

[ ] Readme.md ska även innehålla rubriken Tjänster där du listar och förklarar de Webb-API:er som anropas av din prototyp. - vart i koden & varför	

[:heavy_check_mark:] Med din versionshanteringsteknik ska det vara tydligt hur projektet kan återställas till en variant där ditt valda tredjepartspaket inte är installerat, och även där det läggs till i versionshistoriken	

[ ] Koden ska bestå av minst 12 React komponenter du skrivit själv med hjälp av JSX.	

[ ] Välj och installera ett färdigt javascript-paket i ditt källodsprojekt som används tillsammans med React.	

[ ] Din prototyp ska innehålla minst ett användningstillfälle av javascript biblioteket när den används via en webbläsare.	

[ ] Din applikation ska hämta och visa information för användaren som hämtas via anrop till ett externt REST API.	

[ ] Din applikation ska skicka information skapad via interaktion med användaren till ett externt REST API.	

[ ] Kommunikationen till externa Webb-API:er i applikationen ska vara väl avgränsat från applikationens UI med hjälp av lämplig kodstruktur.	

[ ] Minst två av dina egna komponenter ska utnyttja (läsa och/eller spara) information lokalt i webbläsaren via en datalagringsmetod som inte är local storage.	

[ ] Minst en av dina egna komponenter ska rendera och använda sig av en kontrollerad form komponent (i.e. en "Controlled Component")	

[ ] Minst fem av dina komponenter ska använda sig av state eller props för att rendera tillståndsbaserad information. (i.e. "conditional rendering")	
  

## Kravlista för rapporten
Svara på följande frågor i din inlämnade pdf-fil, varje fråga ska besvaras under sin egna rubrik.

[ ] Rubrik: Mitt bibliotek
Beskriv och förklara användningsområdet av det ramverk/bibliotek utöver React som du använt i din applikation. (en till två paragrafer)
	
[ ] Rubrik: Om extern datalagring och React
Förklara med egna ord vad som är viktigt att tänka på vid användningen av extern datalagring tillsammans med React. (en till två paragrafer).

[ ] Rubrik: Om URL:en
När vi gör förändringar i vår applikation, vad är viktigt att tänka på om vi använt webbläsaradressen (URL) som en datalagringsplats för klienten? (max. 1 paragraf).


[ ] Rubrik: Mitt val av bibliotek
Motivera varför ditt valda bibliotek är ett lämpligt val för ändamålet. Fundera både över paketets utformning, funktionalitet och dess bakomliggande utgivare. (svara utförligt)


[ ] Rubrik: Min kodstruktur
Vilken kodstruktur och ev. designmönster har du använt dig av i koden för att separera applikationens UI från kommunikationen med REST API:er i källkoden, varför är detta en lämplig struktur? (svara utförligt)

	
[ ] Rubrik: Min prototyps externa datalagring
Till vilka ändamål använder du nu i din prototyp extern datalagring - båda lokal och via ev. API:er. Motivera valet av dessa sett till användarupplevelsen av din prototyp. Finns det fler platser där extern datalagring vore lämpligt? (svara utförligt)
 



