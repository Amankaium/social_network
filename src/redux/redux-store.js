import { createStore, combineReducers } from "redux";
import postReducer from "./postReducer";
import messageReducer from "./messageReducer";

let reducers = combineReducers({
    posts: postReducer,
    messages: messageReducer
});

let store = createStore(reducers);

export default store;