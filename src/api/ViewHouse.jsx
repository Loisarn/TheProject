import React from 'react';
import BostadService from './services/BostadService.js';

class ViewHouse extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            houses: []
        }
    }

    componentDidMount() {
        BostadService.getHouseById(this.state.id).then(res => {
            this.setState({houses: res.data});
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
                            <div>{ this.state.houses.what }</div>
                        </div>
                        <div className="row">
                            <label>Kostnad</label>
                            <div> { this.state.houses.cost }</div>
                        </div>
                        <div className="row">
                            <label>Rum</label>
                            <div> { this.state.houses.room }</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewHouse