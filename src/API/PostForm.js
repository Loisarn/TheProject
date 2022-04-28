import React from 'react';
import '../app/app.css';

class PostForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            what: '',
            cost: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        
    }

    render() {
        const {what, cost, body} = this.state
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label className="labels">Vad</label>
                        <input 
                        type="text" 
                        name="what" 
                        value={what} 
                        onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label className="labels">Kostnad</label>
                        <input 
                        type="text" 
                        name="cost" 
                        value={cost} 
                        onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button className="submitbtn" type="submit">Skicka</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm