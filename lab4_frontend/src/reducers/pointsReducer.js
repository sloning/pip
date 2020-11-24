import {ADD_POINT, CLEAR_POINTS, REMOVE_R, SET_ERROR, SET_R} from "../actions/pointsActions";

const initialState = {
    errorMsg: "",
    rValue: 0,
    points: []
}

export default function pointsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ERROR:
            return {...state, errorMsg: action.payload};
        case ADD_POINT:
            return {...state, points: [...state.points, action.payload]};
        case SET_R:
            return {...state, rValue: action.payload};
        case CLEAR_POINTS:
            return {...state, points: action.payload};
        case REMOVE_R:
            return {...state, rValue: action.payload};
        default:
            return state;
    }
}