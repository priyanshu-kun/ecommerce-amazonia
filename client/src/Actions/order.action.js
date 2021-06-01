import { CART_EMPTY, ORDER_CREATE_FAILURE, ORDER_CREATE_REQUEST, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS } from "../Constants/constants"
import Axios from "axios"

export const createOrder = (orderItems) => async (dispatch,getState) => {
    dispatch({
        type: ORDER_CREATE_REQUEST,
        payload: orderItems
    })
    try {
        const {signIn: userInfo} = getState();
        console.log(userInfo.userInfo.token)
        const {data} = await Axios.post("http://localhost:8080/api/order",{orderItems},{
            headers: {
                Authorization: `Bearer ${userInfo.userInfo.token}`
            }
        })
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data.order
        })
        dispatch({
            type: CART_EMPTY
        })
        localStorage.removeItem("cart")
    }
    catch(e) {
        dispatch({
            type: ORDER_CREATE_FAILURE,
            payload: e.response && e.response.data.message ? e.response.data.message : {message: "failed to placed order"}
        })
    }
}
