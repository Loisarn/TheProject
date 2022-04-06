import {BaseElement} from './ui/base-element.js';
import {application} from './app.js';

export class HomePage extends BaseElement {
    constructor() {
        super();
    }

    createElement() {
        super.createElement();

        let styleString = 'width: 300px; height; 80px;';
        let b = new Button('The Project');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
    }

    getElementString() {
        return '<div style="text-align: center;"></div>';
    }
}