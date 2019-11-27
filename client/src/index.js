import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import Provider from './MainProvider'

ReactDOM.render(   
    <Provider>
        <App />
    </Provider>
    , document.getElementById('root'));