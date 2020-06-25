import * as Types from './../constants/ActionsTypes';

export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteInCart = (cart) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        cart
    }
}