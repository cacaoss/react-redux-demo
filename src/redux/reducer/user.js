import * as constants from "../constants"

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.USERUPDATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export default userReducer