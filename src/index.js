import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import Stor from "./redux/store"
import './index.css';
import App from './App';

const store = new Stor({
    user: {
        isLogIn:false,
        lodding:false,
    },
    count: 500,
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);