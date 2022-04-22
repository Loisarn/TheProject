import React from 'react';
import ReactDOM from 'react-dom/client';
import  Navbar  from './navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './pages/Hem.js';
import Renovering from './pages/Renovering.js';
import Kostnad from './pages/Kostnad.js';
import SignIn from './pages/Signin.js';
import Car from './Car.jsx';
import House from './House.jsx';


function App() {
    return(
        <Router>
        <Navbar />
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/renovering' element={<Renovering/>} />
            <Route path='/cost' element={<Kostnad/>} />
            <Route path='/signup' element={<SignIn/>} />
            <Route path='/house' element={<House/>} />
            <Route path='/car' element={<Car/>} />
        </Routes>
        </Router>
    );
}


ReactDOM
.createRoot(document.getElementById('root'))
.render(<App/>);