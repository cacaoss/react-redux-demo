import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"
import rootReducer from "../reducer";

export default function Store(initState) {
    return createStore(
        rootReducer,
        initState,
        compose(applyMiddleware(
            thunk,
            //logger
        ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
}

