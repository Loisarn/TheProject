import React from 'react';
import FordonService from "../services/FordonService";

export class CreateFordon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            what: '',
            cost: '',
            model: '',
            regNum: ''
        }
        this.changeWhatHandler = this.changeWhatHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.changeModelHandler = this.changeModelHandler.bind(this);
        this.changeRegNumHandler = this.changeRegNumHandler.bind(this);
        this.saveOrUpdateVehicle = this.saveOrUpdateVehicle.bind(this);
    }


saveOrUpdateVehicle = (e) => {
    e.preventDefault();
    let vehicles = {what: this.state.what, cost: 
        this.state.cost, model: 
        this.state.model, regNum: 
        this.state.regNum, id: 
        this.state.id};

    console.log('vehicles => ' + JSON.stringify(vehicles));

    FordonService.createVehicle(vehicles).then((res) => {
        this.setState({vehicles: res.data})
    });
}

changeWhatHandler = (event) => {
    this.setState({what: event.target.value});
}

changeCostHandler = (event) => {
    this.setState({cost: event.target.value});
}

changeModelHandler = (event) => {
    this.setState({model: event.target.value});
}

changeRegNumHandler = (event) => {
    this.setState({regNum: event.target.value});
}

cancel(){
    this.props.navigate('/vehicles');
}

render() {
    return (
        <div>
            <br></br>
            <div className="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Vad</label>
                                <input placeholder="vad" what="what" className="form-control" value={this.state.what} onChange={this.changeWhatHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Kostnad</label>
                                <input placeholder="kostnad" cost="cost" className="form-control" value={this.state.cost} onChange={this.changeCostHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Modell</label>
                                <input placeholder="model" model="model" className="form-control" value={this.state.model} onChange={this.changeModelHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Registreringsnummer</label>
                                <input placeholder="id" regNum="regNum" className="form-control" value={this.state.regNum} onChange={this.changeRegNumHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveOrUpdateVehicle}>Spara</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Avbryt</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
         )
    }
}