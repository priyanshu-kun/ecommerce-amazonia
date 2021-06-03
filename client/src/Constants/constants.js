/**
 * product list constants mean fetch all products for server
 */

export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST"
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS"
export const PRODUCT_LIST_FAILURE = "PRODUCT_LIST_FAILURE"

/**
 * product detail contants mean fetch perticular product with ID
 */

export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST"
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS"
export const PRODUCT_DETAILS_FAILURE = "PRODUCT_DETAILS_FAILURE"

/**
 * cart constants implement add or delete action within cart
 */

export const CART_ADD_ITEMS = "CART_ADD_ITEMS"
export const CART_DELETE_ITEMS = "CART_DELETE_ITEMS"
export const CART_EMPTY = "CART_EMPTY"

/**
 * shipping address contants
 */

export const  SAVE_CART_SHIPPING_ADDRESS = "SAVE_CART_SHIPPING_ADDRESS"

/**
 * save payment method
 */

 export const  SAVE_PAYMENT_METHOD = "SAVE_PAYMENT_METHOD"

/**
 * User constants implement user login or logout
 */

export const USER_SIGNIN_REQUEST = "USER_SIGNIN_REQUEST"
export const USER_SIGNIN_SUCCESS = "USER_SIGNIN_SUCCESS"
export const USER_SIGNIN_FAILURE = "USER_SIGNIN_FAILURE"
export const USER_SIGNOUT = "USER_SIGNOUT"


/**
 * User register constants
 */

export const USER_SIGNUP_REQUEST = "USER_SIGNUP_REQUEST"
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS"
export const USER_SIGNUP_FAILURE = "USER_SIGNUP_FAILURE"


/**
 * order constants
 */

export const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST"
export const ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS"
export const ORDER_CREATE_FAILURE = "ORDER_CREATE_FAILURE"
export const ORDER_CREATE_RESET = "ORDER_CREATE_RESET"



export const ORDER_PAY_REQUEST = "ORDER_PAY_REQUEST"
export const ORDER_PAY_SUCCESS = "ORDER_PAY_SUCCESS"
export const ORDER_PAY_FAILURE = "ORDER_PAY_FAILURE"
export const ORDER_PAY_RESET = "ORDER_PAY_RESET"



export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST"
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS"
export const ORDER_DETAILS_FAILURE = "ORDER_DETAILS_FAILURE"