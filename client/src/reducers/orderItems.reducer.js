import { 
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAILURE,
    ORDER_CREATE_RESET,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAILURE,
    ORDER_PAY_REQUEST,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_FAILURE,
    ORDER_PAY_RESET,
    MY_ORDERLIST_REQUEST,
    MY_ORDERLIST_SUCCESS,
    MY_ORDERLIST_FAILURE
 } from "../Constants/constants"
export const orderItemsReducer = (state = {},action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                success: false,
                loading: true
            }
        case ORDER_CREATE_SUCCESS: 
            return {
                loading: false,
                success: true,
                order: action.payload 
            }
        case ORDER_CREATE_FAILURE:
            return {
                loading: false,
                success: false,
                error: action.payload
            }
        case ORDER_CREATE_RESET:
            return {}
        default:
           return state
    }
}

export const orderDetailsReducer = (state = {loading: false},action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                loading: true
            }
        case ORDER_DETAILS_SUCCESS: 
            return {
                loading: false,
                order: action.payload 
            }
        case ORDER_DETAILS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
           return state
    }
}


export const orderPayReducer = (state = {},action) => {
    
    switch (action.type) {
        case ORDER_PAY_REQUEST:
            return {
                loading: true
            }
        case ORDER_PAY_SUCCESS: 
            return {
                loading: false,
                success: true 
            }
        case ORDER_PAY_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case ORDER_PAY_RESET:
            return {}
        default:
           return state
    }
}


export const myOrdersListReducer = (state = {loading: false,orders: []},action) => {
    
    switch (action.type) {
        case MY_ORDERLIST_REQUEST:
            return {
                loading: true
            }
        case MY_ORDERLIST_SUCCESS: 
        return {
            loading: false,
            orders: action.payload
        }
        case MY_ORDERLIST_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        default:
           return state
    }
}

