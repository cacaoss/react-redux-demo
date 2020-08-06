import createSagaMiddleware from "redux-saga"
import userSaga from "./userSaga"

const sagaMiddleware = createSagaMiddleware();

export {userSaga}
export default sagaMiddleware