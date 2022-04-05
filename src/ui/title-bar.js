import {BaseElement} from './base-element.js';

export class TitleBar extends BaseElement {
    
    constructor(title) {
        super();
        this.title = title;
    }

    getElementString() {
        return `
        
        
        `
    }
}