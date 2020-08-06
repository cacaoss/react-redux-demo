import {all} from "redux-saga/effects";
import counterSaga from "./counterSaga";
import helloSaga from "./helloSaga";

export default function* rootSaga() {
    yield all([
        counterSaga(),
        helloSaga()
    ])
}