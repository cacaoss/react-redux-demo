import * as constans from "../constants"

const add = (payload) => {
    return {
        type: constans.ADD,
        payload
    }
}

const minus = (payload) => {
    return {
        type: constans.MINUS,
        payload,
    }
}

const asyncAdd = (payload) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(add(payload));
        }, 1000)
    }
}
const asyncMinus = (payload) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(minus(payload));
        }, 1000)
    }
}

export {add, minus, asyncAdd, asyncMinus}