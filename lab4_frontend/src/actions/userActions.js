export const SET_LOGIN = "SET_LOGIN";
export const SET_ERROR = "SET_ERROR";
export const IS_SIGNIN = "IS_SIGNIN";

export function setError(msg) {
    return {
        type: SET_ERROR,
        payload: msg
    }
}

export function isSignin(choice) {
    return {
        type: IS_SIGNIN,
        payload: choice
    }
}

export function setLogin(payload) {
    return {
        type: SET_LOGIN,
        payload: payload
    }
}
