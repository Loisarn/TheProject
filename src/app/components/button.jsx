import '../app.css';
import React from 'react';
import { Link } from 'react-router-dom';

export function Button() {
    return(
        <Link to='signup'>
            <button className="btn btn-primary">Logga in</button>
        </Link>
    );
}