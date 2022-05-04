import React from 'react';
import FordonService from "../../services/FordonService";

export class CreateFordon extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            what: '',
            cost: '',
        }
        this.changeWhatHandler = this.changeWhatHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.saveOrUpdateFordon = this.saveOrUpdateFordon.bind(this);
    }

    componentDidMount() {

        if(this.state.id === '_add') {
            return
        } else {
            FordonService.getFordonById(this.state.id).then( (res) => {
                let fordon = res.data;
                this.setState({what: fordon.what, 
                    cost: fordon.cost, 
                    id: fordon.id
                });
            });
        }
    }

saveOrUpdateFordon = (e) => {
    e.preventDefault();
    let fordon = {what: this.state.what, cost: this.state.cost, id: this.state.id};
    console.log('fordon => ' + JSON.stringify(fordon));

    if(this.state.id === '_add') {
        FordonService.createFordon(fordon).then(res => {
            this.props.history.push('/fordon');
        });
    } else {
        FordonService.updateFordon(fordon, this.state.id).then( res => {
            this.props.history.push('/fordon');
         });
     }
}

changeWhatHandler = (event) => {
    this.setState({what: event.target.value});
}

changeCostHandler = (event) => {
    this.setState({cost: event.target.value});
}

changeIdHandler = (event) => {
    this.setState({id: event.target.value});
}

cancel(){
    this.props.history.push('/fordon');
}

getTitle(){
    if(this.state.id === '_add'){
        return ( <h3 className="text-center">Lägg till</h3> )
    } else {
        return <h3 className="text-center">Uppdatera</h3>
    }
}

render() {
    return (
        <div>
            <br></br>
            <div class="container">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {
                        this.getTitle()
                    }
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Vad</label>
                                <input placeholder="vad" what="what" className="form-control" value={this.state.what} onChange={this.changeWhatHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Kostnad</label>
                                <input placeholder="kostnad" cost="cost" className="form-control" value={this.state.cost} onChange={this.changeCostHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Id</label>
                                <input placeholder="id" id="id" className="form-control" value={this.state.id} onChange={this.changeIdHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.saveOrUpdateFordon}>Spara</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Avbryt</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
         )
    }
}