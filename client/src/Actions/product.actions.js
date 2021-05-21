import { PRODUCT_LIST_REQUEST } from "../Constants/constants"
import axios from "axios"

export const listProducts = async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
        const data = await axios.get("")
    }
    catch(e) {

    }
}