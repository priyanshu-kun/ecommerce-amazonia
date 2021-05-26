import Axios from "axios"
import { USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../Constants/constants";


export const userSigninReducer = (state = {},action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {loading: true}
        case USER_SIGNIN_SUCCESS:
            return {loading: false,userInfo: action.payload}
        case USER_SIGNIN_FAILURE:
            return {loading: false,error: action.payload}
        case USER_SIGNOUT:
            return {}
        default:
            return state;
    }
}