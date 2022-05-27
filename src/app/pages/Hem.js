import React from 'react';
import '../app.css';
import PopupBtn from '../components/PopupBtn';

export default function Home() {
    return (
        <>
        <div>
        <h1 className="home">Välkommen</h1>
        <p>I denna webbapplikation kan du lägga till egen information om dina fordon eller bostäder.</p>
        </div>
        <div>
        <PopupBtn/>
        </div>
        </>
    );
}