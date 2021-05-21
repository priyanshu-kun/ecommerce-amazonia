import { createStore,compose,applyMiddleware } from "redux"
import thunk from "redux-thunk"

// connect to google chrome dev tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = JSON.parse(window.localStorage.getItem("data")) || [];
const reducer = (state,action) => {
    return {products: {}}
}

const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;