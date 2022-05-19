import React from "react";
import axios from "axios";
import FordonService from "../services/FordonService.js";
import { Link } from "react-router-dom";
import CreateFordon from "./CreateFordon";

class FordonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicle: [],
    };
    this.addVehicle = this.addVehicle.bind(this);
    this.editVehicle = this.editVehicle.bind(this);
    this.deleteVehicle = this.deleteVehicle.bind(this);
  }

  deleteVehicle(id) {
    FordonService.deleteVehicle(id).then((res) => {
      this.setState({
        vehicle: this.state.vehicle.filter((vehicle) => vehicle.id !== id),
      });
    });
  }

  viewVehicle(id) {
    this.props.navigate(`/view-vehicles/${id}`);
  }
  editVehicle(id) {
    this.props.navigate(`/update-vehicles/${id}`);
  }

  componentDidMount() {
    FordonService.getVehicle().then((res) => {
      this.setState({ vehicle: res.data });
    });
  }

  addVehicle() {
    this.props.navigate("/add-vehicles");
  }

  render() {
    return (
      <div className="formList">
        <h2 className="text-center">Lista över Fordon</h2>
        <div className="row"></div>
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
              {this.state.vehicle.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td> {vehicle.what} </td>
                  <td> {vehicle.cost} </td>
                  <td> {vehicle.model} </td>
                  <td> {vehicle.regnum} </td>
                  <td>
                    <button
                      onClick={() => this.editVehicle(vehicle.id)}
                      className="btn btn-info"
                    >
                      Uppdatera
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewVehicle(vehicle.id)}
                      className="btn btn-info"
                    >
                      Detaljer
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteVehicle(vehicle.id)}
                      className="btn btn-danger"
                    >
                      Radera
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn mt-3" onClick={this.addVehicle}>
            Lägg till
          </button>
        </div>
      </div>
    );
  }
}

export default FordonList;
