import axios from 'axios';

export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

// Receive data from getDatabase.js
export const getData = (data) => {
    return {
        type: 'GET_DATA',
        payload: data
    };
};

export const activeSector = (sector) => {
    return {
        type: 'SECTOR',
        payload: sector
    };
};

export const mapToggleOn = () => {
    return {
        type: 'MAP_TOOGLE_ON',
    };
};

export const mapToggleOff = () => {
    return {
        type: 'MAP_TOOGLE_OFF',
    };
};

export const chooseIssue = (issue) => {
    return {
        type: issue,  
    };
};
