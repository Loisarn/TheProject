import React, { Component } from "react";
import { useParams } from "react-router-dom";
import BostadService from "../services/BostadService";
import PropTypes from "prop-types";

export default UpdateBostad = () => {
  const params = useParams();
  return <UpdateBostadPage params={params} />;
};

class UpdateBostadPage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: this.props.params.id,
      place: "",
      what: "",
      cost: "",
      room: "",
    };

    this.changeWhatHandler = this.changeWhatHandler.bind(this);
    this.changePlaceHandler = this.changePlaceHandler.bind(this);
    this.changeCostHandler = this.changeCostHandler.bind(this);
    this.changeRoomHandler = this.changeRoomHandler.bind(this);
    this.updateHouse = this.updateHouse.bind(this);
  }

  componentDidMount() {
    BostadService.getHouseById(this.state.id).then((res) => {
      const house = res.data;
      this.setState({
        what: house.what,
        place: house.place,
        cost: house.cost,
        room: house.room,
      });
    });
  }

  updateHouse = (e) => {
    e.preventDefault();
    const house = {
      place: this.state.place,
      what: this.state.what,
      cost: this.state.cost,
      room: this.state.room,
    };
    console.log("house => " + JSON.stringify(house));
    BostadService.updateHouse(house, this.state.id).then((res) => {
      this.props.navigate("/houses");
    });
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
    this.setState({ model: event.target.value });
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
            <h3 className="text-center">Lägg till</h3>
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
                    placeholder="room"
                    room="room"
                    className="form-control"
                    value={this.state.room}
                    onChange={this.changeRoomHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={this.updateHouse}>
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

UpdateBostadPage.propTypes = {
  place: PropTypes.string,
  what: PropTypes.string,
  cost: PropTypes.number,
};
