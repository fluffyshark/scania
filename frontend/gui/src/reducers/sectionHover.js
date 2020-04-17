var sectorInfo = {sector: {
                        name: "Svalöv",
                        population: "14 143",
                        area: "388.62 km"
}}

const sectionHover = (
    state = sectorInfo, 
    action) => {
        
        if (action.payload == "Svalöv") {
                sectorInfo = {sector: {
                    name: "Svalöv",
                    population: "14 143",
                    area: "388.62 km"
                 }        
            }; 
        }
        if (action.payload == "Östra Göinge") {
                sectorInfo = {sector: {
                    name: "Östra Göinge",
                    population: "14 915",
                    area: "451.2 km"
                }        
            }; 
         }
         if (action.payload == "Bromölla") {
                sectorInfo = {sector: {
                    name: "Bromölla",
                    population: "12 876",
                    area: "197.1 km"
                }        
            }; 
         }
         if (action.payload == "Osby") {
                sectorInfo = {sector: {
                    name: "Osby",
                    population: "13 267",
                    area: "599.8 km"
                }        
            }; 
         }
         if (action.payload == "Kristianstad") {
                sectorInfo = {sector: {
                    name: "Kristianstad",
                    population: "84 908",
                    area: "1 820 76 km"
                }        
            }; 
        }
        if (action.payload == "Hörby") {
                sectorInfo = {sector: {
                    name: "Hörby",
                    population: "15 635",
                    area: "433.1 km"
                }        
            }; 
        }
        if (action.payload == "Skurup") {
                sectorInfo = {sector: {
                    name: "Skurup",
                    population: "15 759",
                    area: "511 km"
                }        
            }; 
        }
        if (action.payload == "Sjöbo") {
                sectorInfo = {sector: {
                    name: "Sjöbo",
                    population: "19 153",
                    area: "506.6 km"
                }        
            }; 
        }
        if (action.payload == "Höör") {
                sectorInfo = {sector: {
                    name: "Höör",
                    population: "16 637",
                    area: "320 km"
                }        
            }; 
        }
        if (action.payload == "Tomelilla") {
                sectorInfo = {sector: {
                    name: "Tomelilla",
                    population: "13 557",
                    area: "397.4 km"
                }        
            }; 
        }
        if (action.payload == "Ystad") {
                sectorInfo = {sector: {
                    name: "Ystad",
                    population: "30 226",
                    area: "1 189 km"
                }        
            }; 
        }
        if (action.payload == "Simrishamn") {
                sectorInfo = {sector: {
                    name: "Simrishamn",
                    population: "6 527",
                    area: "1 254.9 km"
                }        
            }; 
        }
        if (action.payload == "Örkelljunga") {
                sectorInfo = {sector: {
                    name: "Örkelljunga",
                    population: "10 174",
                    area: "329.58 km"
                }        
            }; 
        }
        if (action.payload == "Perstorp") {
                sectorInfo = {sector: {
                    name: "Perstorp",
                    population: "7 497",
                    area: "162 km"
                }        
            }; 
        }

        switch(action.type) {
        case  'SECTOR': 
            return state = sectorInfo
        default:
            return state;
    }
};

export default sectionHover;


