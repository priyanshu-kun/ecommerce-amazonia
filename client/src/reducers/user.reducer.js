import Axios from "axios"
import { 
    USER_SIGNIN_FAILURE, 
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS, 
    USER_SIGNOUT,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAILURE,
    ME_REQUEST,
    ME_SUCCESS,
    ME_FAILURE,
    UPDATE_USER_PROFILE_REQUEST,
    UPDATE_USER_PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_FAILURE,
    UPDATE_USER_PROFILE_RESET
} from "../Constants/constants";


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
export const userSignUpReducer = (state = {},action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return {loading: true}
        case USER_SIGNUP_SUCCESS:
            return {loading: false,userInfo: action.payload}
        case USER_SIGNUP_FAILURE:
            return {loading: false,error: action.payload}
        default:
            return state;
    }
}

export const getMeReducer = (state = {},action) => {
    switch (action.type) {
        case ME_REQUEST:
            return {loading: true}
        case ME_SUCCESS:
            return {loading: false,user: action.payload}
        case ME_FAILURE:
            return {loading: false,error: action.payload}
        default:
            return state;
    }
}
export const updateUserProfileReducer = (state = {},action) => {
    switch (action.type) {
        case UPDATE_USER_PROFILE_REQUEST:
            return {loading: true}
        case UPDATE_USER_PROFILE_SUCCESS:
            return {loading: false,success: true}
        case UPDATE_USER_PROFILE_FAILURE:
            return {loading: false,error: action.payload}
        case UPDATE_USER_PROFILE_RESET:
            return {}
        default:
            return state;
    }
}