import React from 'react';
import { useNavigate } from 'react-router';
import '../app.css';
import  FordonList from "../../api/FordonList.jsx";

export default function Car() {
    const navigate = useNavigate();
    return (
        <>
        
         < FordonList navigate={navigate}/>
    
        </>
    );
}