import {main} from './index.js';

class Project {
    constructor(title, text) {
        
        this.title = title;
        this.text = text;
    }
}


export function showProject() {

    main.innerHTML = `
    <div><h1>Projektidé</h1></div>
    <div class="container">
    <div> 
    INSERT TEXT HERE
    </div>
    </div> `
}