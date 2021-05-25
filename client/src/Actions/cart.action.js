import { 
    CART_ADD_ITEMS,
    CART_DELETE_ITEMS
 } from "../Constants/constants"
import Axios from "axios"

export const addToCart = (product_id,qty) => async (dispatch,getState) => {
   try {
    let {data:{title,image,price,stock,_id}} = await Axios.get(`http://localhost:8080/api/products/${product_id}`);
    dispatch({
        type: CART_ADD_ITEMS,
        payload: {
            title,
            image,
            price,
            stock,
            product: _id,
            qty
        }
    })
    window.localStorage.setItem("cart",JSON.stringify(getState().cartReducer.cart))
   }
   catch(e) {
    console.log("Failed to add to cart: ",e)
   }
}
export const deleteToCart = (product_id) => async (dispatch,getState) => {
   try {
        dispatch({
            type: CART_DELETE_ITEMS,
            payload: {
              product: product_id
            }
        })
        window.localStorage.setItem("cart",JSON.stringify(getState().cartReducer.cart))
   }
   catch(e) {
    console.log("Failed to add to cart: ",e)
   }
}