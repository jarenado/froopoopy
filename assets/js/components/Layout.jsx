import { createStore } from "redux";

const reducer = function() {

}

store.subscribe(()) =>{
    console.log("store changed", store.getState())
});

store.dispatch({
    type: "INC",
    payload: 1
});
