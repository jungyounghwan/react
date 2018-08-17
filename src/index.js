import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from '../public/js/App';
import dashboardApp from './store'

const store = createStore(dashboardApp) // 스토어 생성
const rootElement = document.querySelector('#root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
)