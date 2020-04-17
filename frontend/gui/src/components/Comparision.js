import React from 'react';
import { useSelector } from 'react-redux';

import townspeople from '../img/townspeople_icon.svg';



    
 function Comparison() {

    const getDatabase = useSelector(state => state.getDatabase);
    const nr = 2


    function displayChange() {
        if (Array.isArray(getDatabase)) {
            let newData = getDatabase[nr].population
            let oldData = getDatabase[nr].population[newData.length - 2]
            newData = getDatabase[nr].population[newData.length - 1]
            let stat = newData - oldData
            
                console.log(stat)

                if (newData > oldData) {
                    return (
                        <div className="comparison__box comparison__box-2" id="change_this01">
                            <div className="comparison__box-2__div">
                                <img src={townspeople} alt="population" className="issue__img" />
                                        <p>+{stat}</p>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div className="comparison__box comparison__box-2" id="change_this01">
                            <div className="comparison__box-2__div">
                                <img src={townspeople} alt="population" className="issue__img" />
                                        <p>-{stat}</p>
                            </div>
                        </div>
                    );
                }
            
        
            
           
         }
    }






    return (
        
        <div className="comparision_container">

          
            {displayChange()}
            

            <div className="comparison__box comparison__box-2" id="change_this02">
                <div className="comparison__box-2__div">
            
                </div>
            </div>

            <div className="comparison__box comparison__box-2" id="change_this03">
                <div className="comparison__box-2__div">
            
                </div>
            </div>

            <div className="comparison__box comparison__box-2" id="change_this04">
                <div className="comparison__box-2__div">
            
                </div>
            </div>

            <div className="comparison__box comparison__box-2" id="change_this05">
                <div className="comparison__box-2__div">
            
                </div>
            </div>

  
        </div>

    );



}



export default Comparison;






 