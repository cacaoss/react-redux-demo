import {createStore, applyMiddleware, combineReducers, compose} from "redux"
import createSagaMiddleware from "redux-saga"

import * as constants from "../constants"
import rootSaga from "../saga"

const initState = {
    count: 0,
    hello:"XXXX"
};
const sagaMiddleware = createSagaMiddleware();

const countReducer = (state = 0, action) => {
    switch (action.type) {
        case constants.ADD: {
            return state + action.payload;
        }
        case constants.MINUS: {
            return state - action.payload;
        }
        default:
            return state;
    }
}

const helloReducer = (state = "", action) => {
    switch (action.type) {
        case constants.HELLO: {
            return action.payload;
        }
        default:
            return state;
    }
}

const stroe = createStore(
    combineReducers({
        count: countReducer,
        hello:helloReducer
    }),
    initState,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

sagaMiddleware.run(rootSaga);

export default stroe;