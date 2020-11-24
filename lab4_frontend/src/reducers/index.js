import {combineReducers} from "redux";
import userReducer from "./userReducer";
import pointsReducer from "./pointsReducer"

const rootReducer = combineReducers({
    userReducer: userReducer,
    pointsReducer: pointsReducer
});

export default rootReducer;