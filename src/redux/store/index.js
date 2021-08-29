import {createStore} from "redux";
import {reducer} from "../reducers";

//global store
export const store = createStore(reducer);