import React from 'react';
import Datepicker from './Datepicker';

export class Calendar extends React.Component {
    componentDidMount() {
        $('.datepicker').datepicker({
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            yearRange: "-116:+34",
            dateFormat: 'dd/mm/yy'
        });
    }
    render() {
        return (
            <Datepicker />
        );
    }
}