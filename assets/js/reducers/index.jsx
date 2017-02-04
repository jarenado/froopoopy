import { combineReducers } from "redux";

import user from "./userReducer";
import wines from "./wineReducer";

export default combineReducers({
    user,
    wines
});
