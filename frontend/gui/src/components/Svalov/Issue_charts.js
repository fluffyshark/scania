import React from 'react';
import {Line} from 'react-chartjs-2';
import { useSelector } from 'react-redux';

 

function Issue_charts() {

   
    // Call reducer getDatabase
    const getDatabase = useSelector(state => state.getDatabase);
    const active_Issue = useSelector(state => state.activeIssue);
    
    const nr = 2
    let chartInfo = { yAxes_max: 16000, yAxes_min: 11000, yAxes_stepSize: 200, title: "Population"}
    
// Helsingborg
//Population: KLAR
// Tax_rate: KLAR
// Children in preschool: KLAR
// Elever i grundskolan: 11131,10973,10729,
// Education per capita: KLAR
// Ninth grader graduation: KLAR
// Students per teacher: KLAR
// Children per caretaker: KLAR
// Sick_leave: 0,0,5.6,4.9,
// Median income of population: KLAR
// Population total yearly income: 22247.8,23288.6,23809.5,24312.5,25311.3,26239.5,27134.6,27930.0,29278.4,30838.9,32216.6,33514.8
// Millioner income earners: KLAR
// Average house prices: KLAR
// Houses sold: KLAR

    function issue_data() {
        if (Array.isArray(getDatabase)) {
            let chosen_issue = getDatabase[nr].population
            console.log(getDatabase)
            if (active_Issue.name == "population") {
                 chosen_issue = getDatabase[nr].population
                 chartInfo = {yAxes_max: 16000, yAxes_min: 11000, yAxes_stepSize: 200, title: "Population"}
            }
            if (active_Issue.name == "tax_rate") {
                chosen_issue = getDatabase[nr].tax_rate
                chartInfo = {yAxes_max: 22, yAxes_min: 19, yAxes_stepSize: 0.1, title: "Tax rate (%)"}
            }
            if (active_Issue.name == "elementary") {
                getDatabase[nr].elementary_students[0] = NaN
                getDatabase[nr].elementary_students[1] = NaN
                getDatabase[nr].elementary_students[2] = NaN
                chosen_issue = getDatabase[nr].elementary_students
                chartInfo = {yAxes_max: 2000, yAxes_min: 500, yAxes_stepSize: 100, title: "Elementary students (F-6)"}
            }
            if (active_Issue.name == "preschool") {
                getDatabase[nr].children_in_preschool[0] = NaN
                getDatabase[nr].children_in_preschool[1] = NaN
                getDatabase[nr].children_in_preschool[2] = NaN
                chosen_issue = getDatabase[nr].children_in_preschool
                chartInfo = {yAxes_max: 1500, yAxes_min: 200, yAxes_stepSize: 100, title: "Children in preschool"}
            }
            if (active_Issue.name == "annual_target") {
                chosen_issue = getDatabase[nr].annual_target
                chartInfo = {yAxes_max: 6, yAxes_min: -5, yAxes_stepSize: 0.1, title: "Annual profit target (%)"}
            }
            if (active_Issue.name == "junior_high") {
                getDatabase[nr].junior_high_students[0] = NaN
                getDatabase[nr].junior_high_students[1] = NaN
                getDatabase[nr].junior_high_students[2] = NaN
                chosen_issue = getDatabase[nr].junior_high_students
                chartInfo = {yAxes_max: 1000, yAxes_min: 0, yAxes_stepSize: 100, title: "Junior high students (7-9)"}
            }
            if (active_Issue.name == "high_school_students") {
                getDatabase[nr].high_school_students[0] = NaN
                getDatabase[nr].high_school_students[1] = NaN
                getDatabase[nr].high_school_students[5] = NaN
                chosen_issue = getDatabase[nr].high_school_students
                chartInfo = {yAxes_max: 1000, yAxes_min: 0, yAxes_stepSize: 100, title: "High school students (10-12)"}
            }
            if (active_Issue.name == "expenses") {
                chosen_issue = getDatabase[nr].expenses
                chartInfo = {yAxes_max: 1500, yAxes_min: 0, yAxes_stepSize: 100, title: "Net expenses (mkr)"}
            }
            if (active_Issue.name == "income") {
                chosen_issue = getDatabase[nr].income
                chartInfo = {yAxes_max: 1500, yAxes_min: 0, yAxes_stepSize: 100, title: "Tax income % municipality adjustments (mkr)"}
            }
            if (active_Issue.name == "unemployment") {
                getDatabase[nr].unemployment[0] = NaN
                getDatabase[nr].unemployment[1] = NaN
                chosen_issue = getDatabase[nr].unemployment
                chartInfo = {yAxes_max: 15, yAxes_min: 0, yAxes_stepSize: 0.1, title: "Unemployment"}
            }
            if (active_Issue.name == "pension_obligation") {
                chosen_issue = getDatabase[nr].pension_obligation
                chartInfo = {yAxes_max: 500, yAxes_min: 0, yAxes_stepSize: 10, title: "Pension Obligation (mkr)"}
            }
            if (active_Issue.name == "houses_sold") {
                chosen_issue = getDatabase[nr].number_of_houses_sold
                chartInfo = {yAxes_max: 300, yAxes_min: 0, yAxes_stepSize: 10, title: "Number of houses sold"}
            }
            if (active_Issue.name == "Average_house_prices") {
                chosen_issue = getDatabase[nr].average_house_prices
                chartInfo = {yAxes_max: 2500, yAxes_min: 300, yAxes_stepSize: 100, title: "Average house prices"}
            }
            if (active_Issue.name == "number_of_millioner_income_earners") {
                chosen_issue = getDatabase[nr].number_of_millioner_income_earners
                chartInfo = {yAxes_max: 70, yAxes_min: 0, yAxes_stepSize: 5, title: "Number of millioner income earners"}
            }
            if (active_Issue.name == "population_median_income") {
                chosen_issue = getDatabase[nr].population_median_income
                chartInfo = {yAxes_max: 500, yAxes_min: 0, yAxes_stepSize: 10, title: "Median income of population (mkr)"}
            }
            if (active_Issue.name == "population_total_yearly_income") {
                chosen_issue = getDatabase[nr].population_total_yearly_income
                chartInfo = {yAxes_max: 5000, yAxes_min: 0, yAxes_stepSize: 200, title: "Total yearly income of population (mkr)"}
            }
            if (active_Issue.name == "immigration") {
                chosen_issue = getDatabase[nr].immigration
                chartInfo = {yAxes_max: 2000, yAxes_min: 0, yAxes_stepSize: 100, title: "People moving in"}
            }
            if (active_Issue.name == "newborns") {
                chosen_issue = getDatabase[nr].newborns
                chartInfo = {yAxes_max: 300, yAxes_min: 0, yAxes_stepSize: 10, title: "Newborns"}
            }
            if (active_Issue.name == "deaths") {
                chosen_issue = getDatabase[nr].deaths
                chartInfo = {yAxes_max: 300, yAxes_min: 0, yAxes_stepSize: 10, title: "Deaths"}
            }
            if (active_Issue.name == "students_per_teacher") {
                getDatabase[nr].students_per_teacher[0] = NaN
                getDatabase[nr].students_per_teacher[1] = NaN
                getDatabase[nr].students_per_teacher[2] = NaN
                chosen_issue = getDatabase[nr].students_per_teacher
                chartInfo = {yAxes_max: 20, yAxes_min: 0, yAxes_stepSize: 1, title: "Students per teacher"}
            }
            if (active_Issue.name == "children_per_caretaker") {
                chosen_issue = getDatabase[nr].children_per_caretaker
                chartInfo = {yAxes_max: 10, yAxes_min: 0, yAxes_stepSize: 1, title: "Children per caretaker"}
            }
            if (active_Issue.name == "education_cost_paid_per_capita") {
                chosen_issue = getDatabase[nr].education_cost_paid_per_capita
                chartInfo = {yAxes_max: 40000, yAxes_min: 10000, yAxes_stepSize: 1000, title: "Education cost paid per capita"}
            }
            if (active_Issue.name == "percentage_of_nine_grade_graduate") {
                chosen_issue = getDatabase[nr].percentage_of_nine_grade_graduate
                chartInfo = {yAxes_max: 100, yAxes_min: 0, yAxes_stepSize: 1, title: "Ninth graders eligible for national programs (%)"}
            }
        
            
            return chosen_issue
         }
    }
     

    


    let issue_Chart = {
        chartData: {
            labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            datasets: [
                {
                    label: 'No_Label',
                    data: issue_data(),
                    
                    pointBackgroundColor: '#02fdf8',
                   // borderColor: 'rgba(33, 94, 107, 1)',
                    borderColor: ['rgba(33, 94, 107, 1)','rgba(33, 94, 107, 1)','rgba(33, 94, 107, 1)','rgba(100, 40, 200, 1)','rgba(33, 94, 107, 1)'],
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
                    data={issue_Chart.chartData}
                    options={{
                        responsive: false,
                        maintainAspectRatio: false,
                        title: {
                            display: defaultProps.displayTitle,
                            text: chartInfo.title,
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
                                
                                    max: chartInfo.yAxes_max,
                                    min: chartInfo.yAxes_min,
                                    stepSize: chartInfo.yAxes_stepSize,
                                    fontColor: '#c0c6c9'
                                    
                                   
                                },
                                gridLines: {
                                    drawOnChartArea: true, // remove only yAxes
                                    drawBorder: true,
                                    color: 'rgba(39, 43, 52, 0.3)', // can be made into an array for individual line coloring
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

export default Issue_charts;
