
import { combineReducers } from 'redux';
import { contactReducer } from "./reducer";

export default combineReducers({
    contact: contactReducer,
})