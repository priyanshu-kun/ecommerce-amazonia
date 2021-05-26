import Axios from "axios"
import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAILURE,
    USER_SIGNOUT,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE
} from "../Constants/constants"

export const userSignIn = ({email,password}) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: {
            email,
            password
        }
    })
    try {
        const {data} = await Axios("http://localhost:8080/api/users/signin", {
            method: "POST",
            data: {email,password}
        })
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        })
        window.localStorage.setItem("userInfo",JSON.stringify(data))
    }
    catch(e) {
        dispatch({
            type: USER_SIGNIN_FAILURE,
            payload: e.response.data.message ? {msg: e.response.data.message} : {msg: "ERROR: failed to signin user"}
        })
    }
}



export const userSignOut = ({name,email,password}) => async (dispatch) => {
   try {
        const {data} = await Axios("http://localhost:8080/api/users/signup", {
            method: "POST",
            data: {name,email,password}
        })
   }
   catch(e) {
    dispatch({
        type: USER_SIGNUP_FAILURE,
        payload: e.response.data.message ? {msg: e.response.data.message} : {msg: "ERROR: failed to signin user"}
    })
   }
}



export const userSignout = () => async (dispatch) => {
    localStorage.removeItem("cart");
    localStorage.removeItem("userInfo")
    dispatch({
        type: USER_SIGNOUT
    })
}