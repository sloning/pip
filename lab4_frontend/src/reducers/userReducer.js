import {IS_SIGNIN, SET_ERROR, SET_LOGIN,} from "../actions/userActions";

const initialState = {
    errorMsg: "",
    isSignin: "Войти",
    login: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ERROR:
            return {...state, errorMsg: action.payload};
        case IS_SIGNIN:
            return {...state, isSignin: action.payload};
        case SET_LOGIN:
            return {...state, login: action.payload};
        default:
            return state;
    }
}