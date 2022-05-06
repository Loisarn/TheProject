import React from 'react';
import '../app.css';
import BostadList from '../../api/BostadList.jsx';
import { useNavigate } from 'react-router';

export default function House() {
    const navigate = useNavigate();
    return (
        <>
        
        <BostadList navigate={navigate}/>
        </>
    );
}