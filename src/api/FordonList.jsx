import React from 'react';
import axios from 'axios';
import FordonService from '../services/FordonService.js';


class FordonList extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         vehicles: []
      }
      this.createVehicle = this.createVehicle.bind(this);
      this.editVehicle = this.editVehicle.bind(this);
      this.deleteVehicle = this.deleteVehicle.bind(this);
    }

    deleteVehicle(id) {
        FordonService.deleteVehicle(id).then(res => {
            this.setState({vehicles: this.state.vehicles.filter(vehicles => vehicles.id !== id)});
        });
    }

    viewVehicle(id) {
        this.props.navigate(`/ViewFordon/${id}`);
    }
    editVehicle(id) {
        this.props.navigate(`/vehicles/${id}`);
    }

    componentDidMount() {
        FordonService.getVehicle().then((res) => {
            this.setState({vehicles: res.data});
        });
    }

    createVehicle(vehicles) {
        this.props.navigate('/create-vehicle/');
    }

    render() {
        return (
            <div className="fordonlist">
                <h2 className="text-center">Lista över Fordon</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.createVehicle}>Lägg till</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Vad</th>
                                <th>Kostnad</th>
                                <th>Model</th>
                                <th>Registreringsnummer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.vehicles.map(
                                    vehicles =>
                                    <tr key = {vehicles.id}>
                                        <td> { vehicles.what} </td>
                                        <td> { vehicles.cost} </td>
                                        <td> { vehicles.model } </td>
                                        <td> { vehicles.regNum } </td>
                                        <td>
                                            <button onClick={ () => this.editVehicle(vehicles.id)} className="btn btn-info">Uppdatera</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteVehicle(vehicles.id)} className="btn btn-danger">Radera</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewVehicle(vehicles.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
        
    }
}
    

export default FordonList
