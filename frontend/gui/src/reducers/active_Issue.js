const activeIssue = (
    state = {
        
    },  
    
    action) => {
    switch(action.type) {
        
        case 'POPULATION':
            return state = {
                name: "population",
        };
        case 'TAX_RATE':
            return state = {
                name: "tax_rate", 
        };
        case 'PRESCHOOL_STUDENTS':
            return state = {
                name: "preschool", 
        };
        case 'ANNUAL_TARGET':
            return state = {
                name: "annual_target",
        };
        case 'INCOME':
            return state = {
                name: "income",
        };
        case 'EXPENSES':
            return state = {
                name: "expenses",
        };
        case 'HIGH_SCHOOL':
            return state = {
                name: "high_school_students",
        };
        case 'JUNIOR_HIGH':
            return state = {
                name: "junior_high",
        };
        case 'ELEMENTARY':
            return state = {
                name: "elementary",  
        };  
        case 'UNEMPLOYMENT':
            return state = {
                name: "unemployment",  
        };  
        case 'PENSION_OBLIGATION':
            return state = {
                name: "pension_obligation",  
        };
        case 'HOUSES_SOLD':
            return state = {
                name: "houses_sold",  
        }; 
        case 'AVERAGE_HOUSE_PRICES':
            return state = {
                name: "Average_house_prices",  
        };
        case 'MILLIONER_INCOME_EARNERS':
            return state = {
                name: "number_of_millioner_income_earners",  
        };  
        case 'MEDINAN_INCOME':
            return state = {
                name: "population_median_income",  
        }; 
        case 'TOTAL_YEARLY_INCOME':
            return state = {
                name: "population_total_yearly_income",  
        };  
        case 'IMMIGRATION':
            return state = {
                name: "immigration",  
        }; 
        case 'NEWBORNS':
            return state = {
                name: "newborns",  
        }; 
        case 'DEATHS':
            return state = {
                name: "deaths",  
        }; 
        case 'STUDENTS_PER_TEACHER':
            return state = {
                name: "students_per_teacher",  
        }; 
        case 'CHILDREN_PER_CARETAKER':
            return state = {
                name: "children_per_caretaker",  
        }; 
        case 'NINTH_GRADUATION':
            return state = {
                name: "percentage_of_nine_grade_graduate",  
        };
        case 'EDUCATION_COSTS':
            return state = {
                name: "education_cost_paid_per_capita",  
        };
                              
        
        default:
            return state;
    }
};

export default activeIssue;