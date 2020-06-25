import * as Message from './../constants/Message';
import * as Types from './../constants/ActionsTypes';

var initialState = Message.MGS_WELCOME;


const message = (state = initialState, action) => {
    switch(action.type) {
        case Types.CHANGE_MESSAGE:
            return action.message;
        default: return [...state];
    }
}   
export default message;

