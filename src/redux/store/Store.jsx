import { createStore } from "redux";
import Reducer from "../reducer/combineReducer";
// import ReduxPromise from 'redux-promise';
// import { composeWithDevTools } from "redux-devtools-extension";
export default createStore(Reducer);


