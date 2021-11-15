import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Clock from "./Clock";


ReactDOM.render(
    <React.StrictMode>
        <App/>,
        {/*<Clock/>*/}
    </React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();

