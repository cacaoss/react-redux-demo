import {takeLatest, takeEvery, call, put} from "redux-saga/effects"
import * as constants from "../constants"
import {asycnCountAdd, asyncCountMinus} from "../../service"

function* countAdd(action) {
    const res = yield call(asycnCountAdd, action.payload);

    yield put({
        type: constants.ADD,
        payload: res
    })
}

function* countMinus(action) {
    const res = yield call(asyncCountMinus, action.payload);

    yield put({
        type: constants.MINUS,
        payload: res
    })
}

function* counterSaga(action) {
    yield takeLatest("SAGA_COUNT_ADD", countAdd);
    yield takeEvery("SAGA_COUNT_MINUS", countMinus);
}

export default counterSaga;
