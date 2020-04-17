import React from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getData } from '../../actions';
 

function Annual_target() {

   
    // Call reducer getDatabase
    const getDatabase = useSelector(state => state.getDatabase);
    
    

    function annual_target_data() {
        if (Array.isArray(getDatabase)) {

            getDatabase[1].annual_target[0] = NaN
            getDatabase[1].annual_target[1] = NaN

            return getDatabase[1].annual_target
            
         }
    }
     

    


    let Annual_target_Chart = {
        chartData: {
            labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            datasets: [
                {
                    label: 'Annual Profit Target (%)',
                    data: annual_target_data(),
                    pointBackgroundColor: '#02fdf8',
                    borderColor: 'rgba(33, 94, 107, 1)',
                    backgroundColor: ['rgba(0, 0, 0, 0)']
                    
                }
                
            ]
        }        

    }

    const defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'bottom'
    }


  return (
    <div className="chart">
                <Line
                width={1000}
                height={650}
                    data={Annual_target_Chart.chartData}
                    options={{
                        responsive: false,
                        maintainAspectRatio: false,
                        title: {
                            display: defaultProps.displayTitle,
                            text: 'Annual profit target (%)',
                            fontSize: 25
                        },
                        
                        scales: {
                                
                            xAxes: [{ 
                                  // display:false  (remove lines and text on xAxes)
                                  ticks: {
                                    fontColor: '#c0c6c9'  
                                }, 
                                gridLines: {
                                    drawOnChartArea: true, // remove only yAxes
                                    drawBorder: true,
                                    color: 'rgba(0, 0, 0, 0.0)',
                                    zeroLineColor: 'rgba(0, 0, 0, 0.2)'
                                    },
                            }
                                
                                ],
                            yAxes: [{
                                ticks: {
                                
                                    max: 6,
                                    min: -5,
                                    stepSize: 0.1,
                                    fontColor: '#c0c6c9'
                                    
                                   
                                },
                                gridLines: {
                                    drawOnChartArea: true, // remove only yAxes
                                    drawBorder: true,
                                    color: ['rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','rgba(39, 43, 52, 0.3)','#b9131c'], // can be made into an array for individual line coloring
                                    zeroLineColor: 'rgba(0, 0, 0, 0.2)'
                                    },
                             //  display:false (removes line and numbers)
                            }],
                        },
                        legend: {
                            display: defaultProps.displayLegend,
                            position: defaultProps.legendPosition
                        }
                    }}
                />
            </div>
  );
}

export default Annual_target;
