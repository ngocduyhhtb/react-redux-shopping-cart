import * as Types from '../constants/ActionType';

export const AddToCard = (product) => {
    return {
        type: Types.ADD_TO_CART,
        product
    }
}
export const RemoveFromCart = (product) => {
    return {
        type: Types.REMOVE_FROM_CART,
        product
    }
}
export const DeleteItemFromCart = (product) => {
    return {
        type: Types.DELETE_ITEM_FROM_CART,
        product
    }
}
export const onChangeMessage = (message) => {
    return {
        type: Types.ON_CHANGE_MESSAGE,
        message
    }
}