import React, { Component } from "react";
import { useParams } from "react-router-dom";
import FordonService from "../services/FordonService";

export default UpdateFordon = () => {
  const params = useParams();
  return <UpdateFordonPage params={params} />;
};

class UpdateFordonPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: this.props.params.id,
      what: "",
      cost: "",
      model: "",
      regnum: "",
    };

    this.changeWhatHandler = this.changeWhatHandler.bind(this);
    this.changeCostHandler = this.changeCostHandler.bind(this);
    this.changeModelHandler = this.changeModelHandler.bind(this);
    this.changeRegNumHandler = this.changeRegNumHandler.bind(this);
    this.updateVehicle = this.updateVehicle.bind(this);
  }

  componentDidMount() {
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

  updateVehicle = (e) => {
    e.preventDefault();
    const vehicle = {
      what: this.state.what,
      cost: this.state.cost,
      model: this.state.model,
      regnum: this.state.regnum,
    };
    console.log("vehicle => " + JSON.stringify(vehicle));
    FordonService.updateVehicle(vehicle, this.state.id).then((res) => {
      this.props.navigate("/vehicles");
    });
  };

  // FordonService.createVehicle(vehicles).then((res) => {
  //   this.setState({ vehicles: res.data });
  // });

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

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Lägg till</h3>
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
                  onClick={this.updateVehicle}
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
