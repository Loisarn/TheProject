import React from 'react';

export class Datepicker extends React.Component {
    render() {
        return (
            <input type="text" id="datepicker" 
            className="datepicker form-control"
            placeholder="DD-MM-YYYY"/>
        )
    }
}