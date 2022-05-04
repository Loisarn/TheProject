import React from 'react';
import axios from 'axios';

export class FordonList extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         vehicles: []
      }
      this.addFordon = this.addFordon.bind(this);
      this.editFordon = this.editFordon.bind(this);
      this.deleteFordon = this.deleteFordon.bind(this);
    }

    deleteFordon(id) {
        FordonService.deleteFordon(id).then(res => {
            this.setState({fordon: this.state.fordon.filter(fordon => fordon.id !== id)});
        });
    }

    viewFordon(id) {
        this.props.history.push(`/view-fordon/${id}`);
    }
    editFordon(id) {
        this.props.history.push(`/add-fordon/${id}`);
    }

    componentDidMount() {
        FordonService.getFordon().then((res) => {
            this.setState({fordon: res.data});
        });
    }

    addFordon() {
        this.props.history.push('/add-fordon/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista över Fordon</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addFordon}>Lägg till</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>vad</th>
                                <th>kostnad</th>
                                <th>Id</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.fordon.map(
                                    fordon =>
                                    <tr key = {fordon.id}>
                                        <td> { fordon.what} </td>
                                        <td> { fordon.cost} </td>
                                        <td> { fordon.id} </td>
                                        <td> { fordon.actions} </td>
                                        <td>
                                            <button onClick={ () => this.editFordon(fordon.id)} className="btn btn-info">Uppdatera</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFordon(fordon.id)} className="btn btn-danger">Radera</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewFordon(fordon.id)} className="btn btn-info">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    
}
    
  

export default FordonList