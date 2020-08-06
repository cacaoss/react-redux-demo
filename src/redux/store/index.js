import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger"

import rootReducer from "../reducer";
import sagaMiddleware, {userSaga} from "../saga";

const initState = {
    user: {
        isLogIn: false,
        lodding: false,
    },
    count: 500,
};

const store = createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(
            thunk,
            sagaMiddleware,
            logger
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

sagaMiddleware.run(userSaga);

export default store;
