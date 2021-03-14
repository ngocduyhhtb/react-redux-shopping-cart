import * as Types from '../constants/ActionType';
import * as Message from '../constants/MessageType';

const initialState = Message.MSG_CART_EMPTY;

const message = (state = initialState, action) => {
    switch (action.type) {
        case Types.ON_CHANGE_MESSAGE: {
            console.log(action)
            state = action.message;
            return [...state];
        }
        default: {
            return [...state];
        }
    }
}

export default message;