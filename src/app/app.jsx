import React from 'react';
import ReactDOM from 'react-dom/client';
import  Navbar  from './components/navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './pages/Hem.js';
import Renovering from './pages/Renovering.js';
import Kostnad from './pages/Kostnad.js';
import Car from './components/Car.jsx';
import House from './components/House.jsx';
import Receipt from './components/Receipt.jsx';
import SearchBar from './components/Searchbar.jsx';
import Login from "./components/Login.jsx";
import { AuthProvider } from '../context/AuthProvider.js';
import Register from './components/Register.jsx';
import FooterComponent from './components/FooterComponent.js';
import Contact from './components/Contacts.jsx';
import { db as data } from '../../data/db.json';
import $ from 'jquery';
import FordonList from '../api/FordonList.jsx';



function App() {
    return(
        <Router>
        <Navbar />
        <SearchBar placeholder="Search" data={data} />
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/renovering' element={<Renovering/>} />
            <Route path='/cost' element={<Kostnad/>} />
            <Route path='/signup' element={<Login/>} />
            <Route path='/house' element={<House/>} />
            <Route path='/car' element={<Car/>} />
            <Route path='/receipt' element={<Receipt/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/vehicles/:id' element={<FordonList/>} />
            
        </Routes>
            < FooterComponent />
        </Router>
    );
}


ReactDOM
.createRoot(document.getElementById('root'))
.render(<AuthProvider><App/></AuthProvider>);
