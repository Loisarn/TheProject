import './app.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function Button() {
    return(
        <Link to='login'>
            <button className="btn">Logga in</button>
        </Link>
    );
}