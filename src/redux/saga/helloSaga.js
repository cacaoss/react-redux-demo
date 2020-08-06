import {takeEvery, put} from "redux-saga/effects"
import * as constants from "../constants"

function* hello(action) {
    yield put({
        type: constants.HELLO,
        payload: action.payload
    })
}

function* helloSaga(action) {
    yield takeEvery("SAGA_HELLO", hello);
}

export default helloSaga