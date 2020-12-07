export const ADD_POINT = "ADD_POINT";
export const CLEAR_POINTS = "CLEAR_POINTS";
export const SET_R = "SET_R";
export const REMOVE_R = "REMOVE_R";
export const SET_ERROR = "SET_ERROR";
export const SET_TARGET = "SET_TARGET";
export const SET_IS_TARGET = "SET_IS_TARGET";

export function addPoint(values) {
    return {
        type: ADD_POINT,
        payload: values
    }
}

export function setR(rValue) {
    return {
        type: SET_R,
        payload: rValue
    }
}

export function setError(msg) {
    return {
        type: SET_ERROR,
        payload: msg
    }
}

export function clearPoints() {
    return {
        type: CLEAR_POINTS,
        payload: []
    }
}

export function removeR() {
    return {
        type: REMOVE_R,
        payload: 0
    }
}

export function setTarget(payload) {
    return {
        type: SET_TARGET,
        payload: payload
    }
}

export function setIsTarget(payload) {
    return {
        type: SET_IS_TARGET,
        payload: payload
    }
}