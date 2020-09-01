import { useQuery } from '@apollo/react-hooks';
import { GET_USERS, VIEW_USERS } from "./../Queries/query";
import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, CLEAR_CONTACT, SELECT_CONTACT, DELETE_SELECTED_CONTACT } from './../ApplicationConstant/ApplicationConstant';


export const contactReducer = (state = [], action) => {
    switch (action.type) {
        //creating dispatcher for action
        case CREATE_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts] //adding into existing array
            }
    }
}