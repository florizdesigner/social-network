import React from 'react'
import store from "./redux/redux-store";
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {Provider} from "react-redux";

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root')
);


reportWebVitals();