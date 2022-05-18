import React from 'react';
import { useState, useEffect } from 'react';

function EditFordon(props) {
    const [vehicle, setVehicle] = useState({});

    useEffect(()=> {
        fetch("http:localhost:3000/vehicles/")
        .then(res => res.json())
        .then(
            (result) => {
                setVehicle(result);
            }
        );
    });
    function changeFordonData(e) {

    }
    return (
        <div>
            <h2>FordonDetaljer</h2>
            <p>
                <label>Fordon ID : <input type="text" 
                name="Id" 
                value={vehicle.Id} 
                onChange={changeFordonData}></input></label>
                <label>Vad : <input type="text" 
                name="what" 
                value={vehicle.what} 
                onChange={changeFordonData}></input></label>
                <label>Fordon Kostnad : <input type="text" 
                name="cost" 
                value={vehicle.cost} 
                onChange={changeFordonData}></input></label>
                <label>Fordon modell : <input type="text" 
                name="model" 
                value={vehicle.model} 
                onChange={changeFordonData}></input></label>
                <label>Fordon regnummer : <input type="text" 
                name="regnum" 
                value={vehicle.regnum} 
                onChange={changeFordonData}></input></label>
                 
            </p>
        </div>
    );
}

export default EditFordon