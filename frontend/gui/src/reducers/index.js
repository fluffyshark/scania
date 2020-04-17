import counterReducer from './counter';
import loggedReducer from './isLogged';
import sectionHover from './sectionHover';
import mapToogleOn from './toogle_map';
import activeIssue from './active_Issue';
import getDatabase from './getDatabase';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    sectionHover: sectionHover,
    mapToogleOn: mapToogleOn,
    getDatabase: getDatabase,
    activeIssue: activeIssue
})

export default allReducers;