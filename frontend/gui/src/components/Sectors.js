import React from 'react';
import axios from 'axios';


class Sectors extends React.Component {
    constructor() {
        super()

        this.state = {
            sectors: []
        }

    }
    
    
    

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    sectors: res.data
                });
              //  console.log(this.state.sectors);
            })    
        }

        
    
    
    
    render() {

       
        return (
            <div>
                {       
                    this.state.sectors.map( (sectors, i) =>{
                        return(
                            <div key={i}>
                                <hr/>
                                <p>{sectors.sector}</p>
                                <p>Population: {sectors.population[0]}</p> 
                            </div>
                        );
                    })
                }

               
         </div>
        );
    }
}

export default Sectors;