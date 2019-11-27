import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from './react-router-dom'
import './styles.css';
import App from './App';
import MainProvider from './MainProvider'

ReactDOM.render(   
    <MainProvider>
        <App />
    </MainProvider>
    , document.getElementById('root'));