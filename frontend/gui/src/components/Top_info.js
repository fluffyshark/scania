import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import town_icon from '../img/town_icon.svg';
import townspeople from '../img/townspeople_icon.svg';
import town_area from '../img/town_area_icon.svg';
import Issue_charts from './Svalov/Issue_charts';

import FetchData from './getDatabase';






function Top_info() {
    

    
    const sectionHover = useSelector(state => state.sectionHover);
    const mapToogleOn = useSelector(state => state.mapToogleOn);

    const activeIssue = useSelector(state => state.activeIssue);



        return (
            
            <div> 

                <FetchData />
                 

                <div className="top__info animated fadeIn" style={mapToogleOn.mapOn}>
                    
                    <div className="top__box top__box-1">
                        <div className="top__box-1__div">
                            <img src={town_icon} alt="" className="top__box-1__icon1"/>
                            <p className="top__box-1__text1">{sectionHover.sector.name}</p>
                            <img src={townspeople} alt="" className="top__box-1__icon2"/>
                            <p className="top__box-1__text2">{sectionHover.sector.population}</p>
                            <img src={town_area} alt="" className="top__box-1__icon3"/>
                            <p className="top__box-1__text3">{sectionHover.sector.area}<sup>2</sup></p>
                        </div>
                        
                    </div>
                    
                    <div className="top__box top__box-2">
                        <div className="top__box-2__div">
                            
                        </div>
                    </div>
                    
                    <div className="top__box top__box-3">
                        
                    </div>
                    
                    <div className="top__box top__box-4">
                        
                    </div>
        
                </div> 




                <div className="issue_view animated fadeIn" style={mapToogleOn.issueOn}>

                        <div className="issue_view__tax_rate_chart animated fadeIn" style={activeIssue.show_issue_graph}>
                            <Issue_charts />
                        </div>
    
                </div>

                


            </div>
        );
    


}

export default Top_info;