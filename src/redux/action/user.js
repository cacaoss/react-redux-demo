import * as constants from "../constants"
import {getUserScroe, loginRequest} from "../../service"

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

            const userScore = await getUserScroe(userInfo);
            dispatch(userUpdate({
                ...userScore,
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

const sagaLogIn = (payload) => {
    return {
        type: "SAGA_LOGIN",
        payload
    }
}

export {asyncLogIn, logOut, userUpdate, sagaLogIn}