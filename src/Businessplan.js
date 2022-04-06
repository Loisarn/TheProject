import {main} from './index.js';

class BusinessPlan {
    constructor(title, text) {
        
        this.title = title;
        this.text = text;
    }
}

export function showBusiness() {
    main.innerHTML = `<div><h1>Affärsplan</h1></div>`
}