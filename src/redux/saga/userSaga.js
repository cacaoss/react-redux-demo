import {takeEvery, call, put} from "redux-saga/effects"
import {userUpdate} from "../action"
import {loginRequest,getUserScroe} from "../../service";

function* sagaLogin(action) {
    try {
        yield put(userUpdate({
            isLogIn: false,
            lodding: true,
            err: ""
        }))

        const userInfo = yield call(loginRequest, action.payload)
        yield put(userUpdate({
            ...userInfo,
            isLogIn: true,
            lodding: false,
            err: ""
        }))

        const userScore = yield call(getUserScroe, userInfo);
        yield put(userUpdate({
            ...userScore,
        }))
    } catch (err) {
        yield put(userUpdate({
            isLogIn: false,
            lodding: false,
            err,
        }))
    }
}

function* userSaga() {
    yield takeEvery("SAGA_LOGIN", sagaLogin);
}

export default userSaga