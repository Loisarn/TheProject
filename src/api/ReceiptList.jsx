import React from "react";
import axios from "axios";
import ReceiptService from "../services/ReceiptService.js";
import CreateReceipt from "./CreateReceipt";

class ReceiptList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      receipt: [],
    };
    this.addReceipt = this.addReceipt.bind(this);
  }

  deleteReceipt(id) {
    ReceiptService.deleteReceipt(id).then((res) => {
      this.setState({
        receipt: this.state.receipt.filter((receipt) => receipt.id !== id),
      });
    });
  }

  viewReceipt(id) {
    this.props.navigate(`/view-receipts/${id}`);
  }
  editReceipt(id) {
    this.props.navigate(`/update-receipts/${id}`);
  }

  componentDidMount() {
    ReceiptService.getReceipt().then((res) => {
      this.setState({ receipt: res.data });
    });
  }

  addReceipt() {
    this.props.navigate("/add-receipts");
  }

  render() {
    return (
      <div className="formList">
        <h2 className="text-center">Lista över Kvitton</h2>
        <div className="row"></div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Vad</th>
                <th>Kostnad</th>
                <th>Datum</th>
              </tr>
            </thead>
            <tbody>
              {this.state.receipt.map((receipt) => (
                <tr key={receipt.id}>
                  <td> {receipt.what} </td>
                  <td> {receipt.cost} </td>
                  <td> {receipt.date} </td>
                  <td>
                    <button
                      onClick={() => this.editReceipt(receipt.id)}
                      className="btn btn-info"
                    >
                      Uppdatera
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewReceipt(receipt.id)}
                      className="btn btn-info"
                    >
                      Detaljer
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteReceipt(receipt.id)}
                      className="btn btn-danger"
                    >
                      Radera
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={this.addReceipt}>
            Lägg till
          </button>
        </div>
      </div>
    );
  }
}

export default ReceiptList;
