import { 
    CART_ADD_ITEMS,
    CART_DELETE_ITEMS,
    CART_EMPTY,
    SAVE_CART_SHIPPING_ADDRESS,
    SAVE_PAYMENT_METHOD
 } from "../Constants/constants"
export const productsCartReducer = (state = {loading: true,cart: []},action) => {
    switch (action.type) {
        case CART_ADD_ITEMS:
            const item = action.payload
            const isExists = state.cart.find(i => i.product === item.product)
            if(isExists) {
                return {
                    ...state,
                    cart: state.cart.map(i => i.product === item.product ? item: i)
                }
            }
            return {
                ...state,
                cart: [...state.cart,item]
            }
        case CART_DELETE_ITEMS:
            return {
                ...state,
                cart: state.cart.filter(item => item.product !== action.payload.product)
            }
        case SAVE_CART_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
        case SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }
        case CART_EMPTY:
            return {
                ...state,cart: []
            }
        default:
           return state
    }
}

