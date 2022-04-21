import React from 'react';
import ReactDOM from 'react-dom/client';
import  Navbar  from './navbar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.css'


function App() {
    return(
        <Router>
        <Navbar />
        </Router>
    );
}


ReactDOM
.createRoot(document.getElementById('root'))
.render(<App/>);