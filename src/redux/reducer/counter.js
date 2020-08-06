import * as constants from "../constants"

const counterReducer = (state = 0, action) => {
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

export default counterReducer