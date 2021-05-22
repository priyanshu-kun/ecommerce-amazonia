import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE } from "../Constants/constants"
import Axios from "axios"

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        const res = await Axios.get("http://localhost:8080/api/products");
        if(!res.data) {
            throw new Error()
        }
        res.data = res.data.map(item => (
            // Math.round((Math.random()*5 + Number.EPSILON)*100)/100 -> round a decimal number to it's 2 places
            {...item,
                rating: Math.round(((Math.random() * (5 - 2 + 1) + 2) + Number.EPSILON)*100)/100,
                reviews: Math.floor(Math.random() * 100)+1,
                stock: Math.floor(Math.random() * 100)
            }
        ))
        
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: res.data
        })
    }
    catch(e) {
        dispatch({
            type: PRODUCT_LIST_FAILURE,
            payload: {
                msg: "ERROR: for fetching products"
            }
        })
    }
}