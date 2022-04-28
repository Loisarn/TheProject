import React from 'react';
import axios from 'axios';

class FordonList extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }
    

    componentDidMount(){
        axios.get('http://localhost:1234/car')
        .then(response => {
            this.setState({
                posts:response.data
            })
            console.log(response.data)
        })
    }

    render() {
        return(
            <div>
                <h2>Dina fordon</h2>
            </div>
        )
    }
}

export default FordonList