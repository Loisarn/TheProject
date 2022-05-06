import React from 'react';
import FordonService from '../services/FordonService.js';

class ViewFordon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vehicles: []
        }
    }

    componentDidMount() {
        FordonService.getVehicleById(this.state.id).then(res => {
            this.setState({vehicles: res.data});
        })
    }

    render() {
        return(
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Detaljer</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Vad</label>
                            <div>{ this.state.vehicles.what }</div>
                        </div>
                        <div className="row">
                            <label>Kostnad</label>
                            <div> { this.state.vehicles.cost }</div>
                        </div>
                        <div className="row">
                            <label>Modell</label>
                            <div> { this.state.vehicles.model }</div>
                        </div>
                        <div className="row">
                            <label>Registreringsnummer</label>
                            <div> {this.state.vehicles.regNum }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewFordon