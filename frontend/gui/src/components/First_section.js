import React from 'react';
import { useSelector } from 'react-redux';
import Comparison from './Comparision';




// class First_section extends Component {
    
 function First_section() {

    const mapToogleOn = useSelector(state => state.mapToogleOn);
    


    

  


    
        return (

            <div>
            
                <div className="first_section animated fadeIn" style={mapToogleOn.mapOn}>
                
                    <div className="first_section_first">
                        <p>Comparisons</p>
                       
                    
                    </div>
                    
                    <div className="first_section_second">
                        <div className="first_container">

                            <Comparison />


                        </div>
                    </div>


                </div>


            </div>

        );
    


}



export default First_section;