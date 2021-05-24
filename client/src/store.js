import { createStore,compose,applyMiddleware, combineReducers } from "redux"
import {productReducers,productDetailsReducers} from "./reducers/product.reducer"
import { productsCartReducer } from "./reducers/cartReducer"
import thunk from "redux-thunk"

// connect to google chrome dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    cartReducer: {
        cart: window.localStorage.getItem("cart") 
        ? JSON.parse(window.localStorage.getItem("cart"))
        :[]
    }
};
const reducer = combineReducers({
    productList: productReducers,
    prodDetails: productDetailsReducers,
    cartReducer: productsCartReducer
})

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;