import { 
    CART_ADD_ITEMS,
    CART_DELETE_ITEMS
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
        default:
           return state
    }
}
