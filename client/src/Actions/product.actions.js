import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAILURE,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAILURE } from "../Constants/constants"
import Axios from "axios"

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        let {data} = await Axios.get("http://localhost:8080/api/products");
        if(!data) {
            throw new Error()
        } 
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }
    catch(e) {
        dispatch({
            type: PRODUCT_LIST_FAILURE,
            payload: {
                msg: "ERROR: Failed to fetch product form server🙂"
            }
        })
    }
}



export const productDetails = (product_id) => async (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST,
        payload: product_id
    })
    try {
        let {data} = await Axios.get(`http://localhost:8080/api/products/${product_id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch(e) {
        dispatch({
            type: PRODUCT_DETAILS_FAILURE,
            payload: e.response.data.message ? {msg: e.response.data.message} : {msg: "ERROR: failed to load data from server🙂"}
        })
    }
}