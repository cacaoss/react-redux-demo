import {combineReducers} from "redux"
import userReducer from "./user";
import counterReducer from "./counter";

const rootReducer = combineReducers({
    user: userReducer,
    count: counterReducer
})

export default rootReducer