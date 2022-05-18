import React from "react";
import BostadService from "../services/BostadService.js";

class BostadList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: [],
    };
    this.createHouse = this.createHouse.bind(this);
    this.editHouse = this.editHouse.bind(this);
    this.deleteHouse = this.deleteHouse.bind(this);
  }

  deleteHouse(id) {
    BostadService.deleteHouse(id).then((res) => {
      this.setState({
        houses: this.state.houses.filter((houses) => houses.id !== id),
      });
    });
  }

  viewHouse(id) {
    this.props.navigate(`/view-house/${id}`);
  }
  editHouse(id) {
    this.props.navigate(`/add-house/${id}`);
  }

  componentDidMount() {
    BostadService.getHouse().then((res) => {
      this.setState({ houses: res.data });
    });
  }

  createHouse() {
    this.props.navigate("/create-house/");
  }

  render() {
    return (
      <div className="fordonlist">
        <h2 className="text-center">Lista över Bostäder</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.createHouse}>
            Lägg till
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Vad</th>
                <th>Kostnad</th>
                <th>Rum</th>
              </tr>
            </thead>
            <tbody>
              {this.state.houses.map((houses) => (
                <tr key={houses.id}>
                  <td> {houses.what} </td>
                  <td> {houses.cost} </td>
                  <td> {houses.room} </td>
                  <td>
                    <button
                      onClick={() => this.editHouse(houses.id)}
                      className="btn btn-info"
                    >
                      Uppdatera
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteHouse(houses.id)}
                      className="btn btn-danger"
                    >
                      Radera
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewHouse(houses.id)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default BostadList;
