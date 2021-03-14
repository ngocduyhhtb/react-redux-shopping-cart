import * as actions from '../constants/ActionType'
import data from '../data'

const initialState = data ? data : [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_TO_CART:
        default:
            return [...state];
    }
}
export default products;