import React from 'react';
import '../app/app.css';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            what: [],
            cost: '',
            id: '',
            notes: ''
        };

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }

    create(e) {
        // add entity - POST
        e.preventDefault();
    }

    update(e) {
        //update entity - PUT
        e.preventDefault();
    }

    delete(e) {
        //delete entity - delete
        e.preventDefault();
    }

    handleChange (changeObject) {
        this.setState(changeObject)
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form className="d-flex flex-column">
                            
                            <label htmlFor="what">Vad
                            <input 
                            what="vad"
                            id="name"
                            type="text"
                            className="form-control"
                            value={this.state.what}
                            onChange={(e) => this.handleChange ({ what: e.target.value})} required
                            />
                            </label>
                            <label htmlFor="cost">Kostnad
                            <input 
                            cost="cost"
                            id="name"
                            type="text"
                            className="form-control"
                            value={this.state.cost}
                            onChange={(e) => this.handleChange ({ cost: e.target.value})} required
                            />
                            </label>
                            <label htmlFor="id">ID
                            <input 
                            id="id"
                            type="text"
                            className="form-control"
                            value={this.state.id}
                            onChange={(e) => this.handleChange ({ id: e.target.value})} required
                            />
                            </label>
                            <button className="btn btn-primary" type="button" onClick={ (e) => this.create(e)}>Lägg till</button>
                            <button className="btn btn-primary" type="button" onClick={ (e) => this.update(e)}>Uppdatera</button>
                            <button className="btn btn-primary" type="button" onClick={ (e) => this.delete(e)}>Ta bort</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
//     constructor(props) {
//         super(props)

//         this.state = {
//             what: '',
//             cost: '',
//         }
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit = (e) => {
        
//     }

//     render() {
//         const {what, cost} = this.state
//         return (
//             <div className="container">
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <label className="labels">Vad</label>
//                         <input 
//                         type="text" 
//                         placeholder="Vad har blivit renoverat/lagat" 
//                         value={what} 
//                         onChange={this.handleChange}></input>
//                     </div>
//                     <div>
//                         <label className="labels">Kostnad</label>
//                         <input 
//                         type="text" 
//                         placeholder="Kostnaden för renovering/lagning" 
//                         value={cost} 
//                         onChange={this.handleChange}></input>
//                     </div>
//                     <div>
//                         <button className="submitbtn" type="submit">Skicka</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

export default PostForm