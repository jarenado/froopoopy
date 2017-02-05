import { combineReducers } from "redux"

import wine from "./wineReducer";
import user from "./userReducer";

export default combineReducers({
    wine,
    user,
})
