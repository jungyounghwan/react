import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './resources/css/reset.css';
import './resources/css/common.css';
import './resources/css/content.css';

const rootElement = document.querySelector('#root');
ReactDOM.render(
        <App />,
        rootElement
)