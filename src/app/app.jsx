import React from 'react';
import ReactDOM from 'react-dom/client';
import  Navbar  from './components/navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './pages/Hem.js';
import Renovering from './pages/Renovering.js';
import Kostnad from './pages/Kostnad.js';
// import SignIn from './pages/Signin.js';
import Car from './components/Car.jsx';
import House from './components/House.jsx';
import Receipt from './components/Receipt.jsx';
import axios from 'axios';
import SearchBar from './components/Searchbar.jsx';
import Data from "./Data.json";
import Login from "./Login.jsx";
import { AuthProvider } from '../context/AuthProvider.js';
import Register from './Register.jsx';
import CreateFordon from './components/CreateFordon.jsx';



function App() {
    return(
        <Router>
        <Navbar />
        <SearchBar placeholder="Search" data={Data} />
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/renovering' element={<Renovering/>} />
            <Route path='/cost' element={<Kostnad/>} />
            <Route path='/signup/*' element={<Login/>} />
            <Route path='/house' element={<House/>} />
            <Route path='/car' element={<Car/>} />
            <Route path='/receipt' element={<Receipt/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
        </Router>
    );
}


ReactDOM
.createRoot(document.getElementById('root'))
.render(<AuthProvider><App/></AuthProvider>);
