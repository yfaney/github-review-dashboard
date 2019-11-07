import { combineReducers } from 'redux';
import pullRequestDataReducer from './pullRequestDataReducers';
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({ pullRequestDataReducer, ajaxCallsInProgress });

export default rootReducer;
