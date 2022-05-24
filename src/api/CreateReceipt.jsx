import React from "react";
import ReceiptService from "../services/ReceiptService.js";

export default class CreateReceipt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      what: "",
      cost: "",
      date: "",
    };
    this.changeWhatHandler = this.changeWhatHandler.bind(this);
    this.changeCostHandler = this.changeCostHandler.bind(this);
    this.changeRoomHandler = this.changeRoomHandler.bind(this);
    this.saveReceipt = this.saveReceipt.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      ReceiptService.getReceiptById(this.state.id).then((res) => {
        let houses = res.data;
        this.setState({
          what: receipt.what,
          cost: receipt.cost,
          room: receipt.room,
          id: receipt.id,
        });
      });
    }
  }

  saveReceipt = (e) => {
    e.preventDefault();
    let receipt = {
      what: this.state.what,
      cost: this.state.cost,
      date: this.state.date,
    };

    console.log("receipt => " + JSON.stringify(receipt));

    ReceiptService.createReceipt(receipt).then((res) => {
      this.setState({ receipt: res.data });
    });

    if (this.state.id === "_add") {
      ReceiptService.createReceipt(receipt).then((res) => {
        this.props.navigate("/receipts");
      });
    } else {
      ReceiptService.updateReceipt(receipt, this.state.id).then((res) => {
        this.props.navigate("/receipts");
      });
    }
  };

  changeWhatHandler = (event) => {
    this.setState({ what: event.target.value });
  };

  changeCostHandler = (event) => {
    this.setState({ cost: event.target.value });
  };

  changeDateHandler = (event) => {
    this.setState({ room: event.target.value });
  };

  cancel() {
    this.props.navigate("/receipts");
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
                  <label>Datum</label>
                  <input
                    placeholder="datum"
                    date="date"
                    className="form-control"
                    value={this.state.date}
                    onChange={this.changeDateHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={this.saveReceipt}>
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
