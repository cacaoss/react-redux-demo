import * as constants from "../constants"
import {loginRequest} from "../../service"

const userUpdate = (payload) => {
    return {
        type: constants.USERUPDATE,
        payload
    }
}

const asyncLogIn = (payload) => {
    return async (dispatch) => {
        dispatch(userUpdate({isLogIn: false, lodding: true, err: ""}))

        try {
            const userInfo = await loginRequest(payload);
            dispatch(userUpdate({
                ...userInfo,
                isLogIn: true,
                lodding: false,
            }));
        } catch (err) {
            dispatch(userUpdate({
                isLogIn: false,
                lodding: false,
                err
            }));
        }
    }
}
const logOut = () => {
    return userUpdate({isLogIn: false, lodding: false, err: ""});
}

export {asyncLogIn, logOut}