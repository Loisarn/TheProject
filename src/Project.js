import {main} from './index.js';

class Project {
    constructor(title, text) {
        
        this.title = title;
        this.text = text;
    }
}


export function showProject() {

    //const mockUp  -bild

    main.innerHTML = `
    <div><h1>Projektidé</h1></div>
    <div class="container">
    <div> <p>
    <span>Floppy</span> är en app där man kan registrera info om till exempel lagningar på bilen, 
    eller om man har renoverat i huset. Man kan även spara sina kvitton och få kvitton till appen.
    <span>Floppy</span> handlar om att ha en bättre koll över lagningar/renoveringar och viktiga papper.
    </p>
    </div>
    </div> `
}