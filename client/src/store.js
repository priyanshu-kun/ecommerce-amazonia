import { createStore,compose,applyMiddleware, combineReducers } from "redux"
import {productReducers,productDetailsReducers} from "./reducers/product.reducer"
import thunk from "redux-thunk"

// connect to google chrome dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};
const reducer = combineReducers({
    productList: productReducers,
    productsDetail: productDetailsReducers
})

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;