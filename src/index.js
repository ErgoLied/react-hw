import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const rootReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {...state, users: [...action.payload]};
        case 'PUSH_USER':
            return {...state, users: [...state.users, action.payload]}
        default:
            return state;
    }
}

//global store
export const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);