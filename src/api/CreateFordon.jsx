import React from "react";
import FordonService from "../services/FordonService";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

class CreateFordon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      what: "",
      cost: "",
      model: "",
      regnum: "",
    };

    this.changeWhatHandler = this.changeWhatHandler.bind(this);
    this.changeCostHandler = this.changeCostHandler.bind(this);
    this.changeModelHandler = this.changeModelHandler.bind(this);
    this.changeRegNumHandler = this.changeRegNumHandler.bind(this);
    this.saveOrUpdateVehicle = this.saveOrUpdateVehicle.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      FordonService.getVehicleById(this.state.id).then((res) => {
        const vehicle = res.data;
        this.setState({
          what: vehicle.what,
          cost: vehicle.cost,
          model: vehicle.model,
          regnum: vehicle.regnum,
        });
      });
    }
  }

  saveOrUpdateVehicle = (e) => {
    e.preventDefault();
    const vehicle = {
      what: this.state.what,
      cost: this.state.cost,
      model: this.state.model,
      regnum: this.state.regnum,
    };
    console.log("vehicle => " + JSON.stringify(vehicle));

    if (this.state.id === "_add") {
      FordonService.createVehicle(vehicle).then((res) => {
        this.props.navigate("/vehicles");
      });
    } else {
      FordonService.updateVehicle(vehicle, this.state.id).then((res) => {
        this.props.navigate("/vehicles");
      });
    }

    // FordonService.createVehicle(vehicles).then((res) => {
    //   this.setState({ vehicles: res.data });
    // });
  };

  changeWhatHandler = (event) => {
    this.setState({ what: event.target.value });
  };

  changeCostHandler = (event) => {
    this.setState({ cost: event.target.value });
  };

  changeModelHandler = (event) => {
    this.setState({ model: event.target.value });
  };

  changeRegNumHandler = (event) => {
    this.setState({ regnum: event.target.value });
  };

  cancel() {
    this.props.navigate("/vehicles");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Lägg till</h3>;
    } else {
      return <h3 className="text-center">Uppdatera</h3>;
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {this.getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Vad</label>
                  <input
                    placeholder="vad"
                    what="what"
                    className="form-control"
                    value={this.state.what}
                    onChange={this.changeWhatHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Kostnad</label>
                  <input
                    placeholder="kostnad"
                    cost="cost"
                    className="form-control"
                    value={this.state.cost}
                    onChange={this.changeCostHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Modell</label>
                  <input
                    placeholder="model"
                    model="model"
                    className="form-control"
                    value={this.state.model}
                    onChange={this.changeModelHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Registreringsnummer</label>
                  <input
                    placeholder="regnum"
                    regnum="regnum"
                    className="form-control"
                    value={this.state.regnum}
                    onChange={this.changeRegNumHandler}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={this.saveOrUpdateVehicle}
                >
                  Spara
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                  style={{ marginLeft: "10px" }}
                >
                  Avbryt
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateFordon;
