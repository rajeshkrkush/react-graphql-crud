
import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, CLEAR_CONTACT, SELECT_CONTACT, DELETE_SELECTED_CONTACT } from './../ApplicationConstant/ApplicationConstant';


//actions
export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    }
}


export const getContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    }
}