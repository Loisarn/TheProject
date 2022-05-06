import React from 'react';
import BostadService from "../../services/BostadService.js";

export class CreateBostad extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            what: '',
            cost: '',
            room: '',
            
        }
        this.changeWhatHandler = this.changeWhatHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.changeRoomHandler = this.changeRoomHandler.bind(this);
        this.saveOrUpdateHouse = this.saveOrUpdateHouse.bind(this);
    }

    componentDidMount() {

        if(this.state.id === '_add') {
            return
        } else {
            BostadService.getHouseById(this.state.id).then( (res) => {
                let houses = res.data;
                this.setState({
                    what: houses.what, 
                    cost: houses.cost, 
                    room: houses.room,
                    id: houses.id,
                });
            });
        }
    }

saveOrUpdateHouse = (e) => {
    e.preventDefault();
    let houses = {what: this.state.what, 
        cost: this.state.cost, 
        room: this.state.room, 
         id: this.state.id};

    console.log('houses => ' + JSON.stringify(houses));

    BostadService.createHouse(houses).then((res) => {
        this.setState({houses: res.data})
    });

     if(this.state.id === '_add') {
         BostadService.createHouse(houses).then(res => {
            this.props.navigate('/houses');
         });
     } else {
         BostadService.updateHouse(houses, this.state.id).then( res => {
             this.props.navigate('/houses');
         });
      }
}

changeWhatHandler = (event) => {
    this.setState({what: event.target.value});
}

changeCostHandler = (event) => {
    this.setState({cost: event.target.value});
}

changeRoomHandler = (event) => {
    this.setState({room: event.target.value});
}

cancel(){
    this.props.navigate('/houses');
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
            <div className="container">
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
                                <label>Rum</label>
                                <input placeholder="model" model="model" className="form-control" value={this.state.room} onChange={this.changeRoomHandler}/>
                                </div>
                                

                                <button className="btn btn-success" onClick={this.saveOrUpdateHouse}>Spara</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Avbryt</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
         )
    }
}