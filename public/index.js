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

