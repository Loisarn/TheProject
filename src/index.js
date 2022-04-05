import $ from '../node_modules/jquery/src/jquery.js';
import Contact from './modules/Contact.js';
//import {TitleBar} from './ui/title-bar.js';
// import { BusinessPlan } from "./modules/businessplan";

const primaryNav = document.querySelector('#navbarSupportedContent');
const navToggle = document.querySelector('.navbar-toggler');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
});