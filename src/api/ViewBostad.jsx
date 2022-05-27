import React from "react";
import BostadService from "../services/BostadService.js";
import { useParams } from "react-router-dom";

export default ViewBostad = () => {
  const params = useParams();
  return <ViewBostadPage params={params} />;
};

class ViewBostadPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      houseid: this.props.params.id,
      houses: {},
    };
  }

  componentDidMount() {
    BostadService.getHouseById(this.state.houseid)
      .then((res) => {
        this.setState({ houses: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="details">
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">Detaljer</h3>
          <div className="card-body">
            <div className="row">
              <label>Adress</label>
              <div>{this.state.houses.place}</div>
            </div>
            <div className="row">
              <label>Vad</label>
              <div>{this.state.houses.what}</div>
            </div>
            <div className="row">
              <label>Kostnad</label>
              <div> {this.state.houses.cost}</div>
            </div>
            <div className="row">
              <label>Rum</label>
              <div> {this.state.houses.room}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
