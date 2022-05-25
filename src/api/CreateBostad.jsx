import React from "react";
import PropTypes from "prop-types";
import BostadService from "../services/BostadService.js";

export default class CreateBostad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: "",
      what: "",
      cost: "",
      room: "",
    };
    this.changeWhatHandler = this.changeWhatHandler.bind(this);
    this.changeCostHandler = this.changeCostHandler.bind(this);
    this.changeRoomHandler = this.changeRoomHandler.bind(this);
    this.changePlaceHandler = this.changePlaceHandler.bind(this);
    this.saveHouse = this.saveHouse.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "add") {
      return;
    } else {
      BostadService.getHouseById(this.state.id).then((res) => {
        let houses = res.data;
        this.setState({
          place: houses.place,
          what: houses.what,
          cost: houses.cost,
          room: houses.room,
          id: houses.id,
        });
      });
    }
  }

  saveHouse = (e) => {
    e.preventDefault();
    let houses = {
      place: this.state.place,
      what: this.state.what,
      cost: this.state.cost,
      room: this.state.room,
    };

    console.log("houses => " + JSON.stringify(houses));

    BostadService.createHouse(houses).then((res) => {
      this.setState({ houses: res.data });
    });

    if (this.state.id === "add") {
      BostadService.createHouse(houses).then((res) => {
        this.props.navigate("/houses");
      });
    } else {
      BostadService.updateHouse(houses, this.state.id).then((res) => {
        this.props.navigate("/houses");
      });
    }
  };

  changeWhatHandler = (event) => {
    this.setState({ what: event.target.value });
  };

  changePlaceHandler = (event) => {
    this.setState({ place: event.target.value });
  };

  changeCostHandler = (event) => {
    this.setState({ cost: event.target.value });
  };

  changeRoomHandler = (event) => {
    this.setState({ room: event.target.value });
  };

  cancel() {
    this.props.navigate("/houses");
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
                  <label>Adress</label>
                  <input
                    placeholder="adress"
                    place="place"
                    className="form-control"
                    value={this.state.place}
                    onChange={this.changePlaceHandler}
                  />
                </div>
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
                  <label>Rum</label>
                  <input
                    placeholder="model"
                    model="model"
                    className="form-control"
                    value={this.state.room}
                    onChange={this.changeRoomHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={this.saveHouse}>
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

CreateBostad.propTypes = {
  place: PropTypes.string,
  what: PropTypes.string,
  cost: PropTypes.number,
};
