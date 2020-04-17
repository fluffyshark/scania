const mapToogleOn = (
    state = {
        mapOn: {},
        issueOn: {display:"none"} }, 
    
    action) => {
    switch(action.type) {
        case 'MAP_TOOGLE_ON':
            return state = {
                mapOn: {},
                issueOn: {display:"none"}    
            };
        
        case 'MAP_TOOGLE_OFF':
            return state = {
                mapOn: {display:"none"},
                issueOn: {} 
             };
        default:
            return state;
    }
};

export default mapToogleOn;

