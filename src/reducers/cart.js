import * as Types from '../constants/ActionType';

const initialState = [];
const findProductInCart = (cart, product) => {
    let index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
const cart = (state = initialState, action) => {
    const {product} = action;
    switch (action.type) {
        case Types.ADD_TO_CART: {
            let index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += 1;
            } else {
                state.push(product);
            }
            return [...state];
        }
        case Types.REMOVE_FROM_CART: {
            let index = findProductInCart(state, product);
            if (index !== -1) {
                if (state[index].quantity <= 1) {
                    state.splice(index, 1);
                } else {
                    state[index].quantity -= 1;
                }
            }
            return [...state];
        }
        case Types.DELETE_ITEM_FROM_CART: {
            let index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        }
        default: {
            return [...state];
        }
    }
}
export default cart;