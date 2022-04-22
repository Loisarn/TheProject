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

## Kravlista för källkodsprojektet

[:heavy_check_mark:] Ditt inlämnade git-repo är samma som i tidigare inlämningsuppgift.

[:heavy_check_mark:] Ditt inlämnade git-repo ska innehålla en readme.md fil som kort beskriver vad som behöver göras för att man ska kunna bygga och besöka applikationen via webbläsaren. Den givna beskrivningen ska vara utförlig och korrekt.

[:heavy_check_mark:] Ditt repo ska fortfarande innehålla index.html och app.html - index.html ska fungera likadant som i tidigare inlämningsuppgift när den besöks i webbläsaren.

[:heavy_check_mark:] Din källkod (javascript-filer, och ev. andra filer) ska kunna transpileras med ett byggsystem beskrivet i readme.md-filen.

[:heavy_check_mark:] Endast lämpliga filer som inte kan genereras av byggsystemet, eller som kan installeras, ska vara versionshanterade.

## Kravlista för app.html

[:heavy_check_mark:] När app.html besöks i webbläsaren ska nu din första prototyp renderas med React

[:heavy_check_mark:] React-trädet som renderas som ska bestå av minst 5st komponenter som du skrivit själv och som finns med i källkoden. (alla komponenter behöver inte renderas samtidigt)

[:heavy_check_mark:] Dina React komponenter är skrivna med JSX syntaxen. 

[ ] Minst två av dina komponenter ska hantera ett "event" i Javascript, exempelvis från användaren.

[ ] Minst två av dina komponenter ska använda sig av state för att rendera tillståndsbaserad information. (i.e. "conditional rendering")

[ ] En av dina komponenter använder sig av en Lifecycle metod eller hook för att påverka en annan komponents tillstånd. Render räknas inte som en lifecycle metod.

[ ] Via en av komponenterna ska användaren kunna spara information i LocalStorage.

[ ] Informationen i LocalStorage används vid renderingen av React-trädet.

[:heavy_check_mark:] I app.html används egen css, eller ett bibliotek för att ge dina komponenter stil och form
	
[:heavy_check_mark:] I app.html används egen css för att ge dina komponenter rörelser

