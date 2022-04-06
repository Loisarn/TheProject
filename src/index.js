// import $ from '../node_modules/jquery/src/jquery.js';
// import * as Contact from './Contact.js';
// import * as BPlan from './Businessplan.js';
// import {Button} from './ui/Buttons.js';
import {showProject} from './Project.js';
import {showBusiness} from './Businessplan.js';
import {showContact} from './Contact.js';

export const main = document.getElementById('main');
const projectButton = document.getElementById('project');
projectButton.addEventListener('click', () => {
    showProject();
})

const businessButton = document.getElementById('businessplan');
businessButton.addEventListener('click', () => {
    showBusiness();
})

const contactButton = document.getElementById('contact');
contactButton.addEventListener('click', () => {
    showContact();
})

// export class App extends ApplicationBase {

//     constructor() {
//         super('Floppy');
        
//         this.addRoute('Businessplan', null);
//         this.addRoute('Project', null);
//         this.addRoute('Contact', null);
//     }
// }

