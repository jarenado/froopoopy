import { combineReducers } from "redux"

import wine from "./wineReducer";
import user from "./userReducer";
import user from "./modalReducer";

export default combineReducers({
    wine,
    user,
    modal
})
