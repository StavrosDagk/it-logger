import { combineReducers } from 'redux';
import logReducer from './logReduer';

export default combineReducers({
    log: logReducer
});