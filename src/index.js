import React from 'react';
import ReactDOM from 'react-dom';
import 'minireset.css';
import './style/style.scss';
import App from './App';
import {createStore} from 'redux';
import changeBasket from './redux/reduser';
import {Provider} from 'react-redux';

let store = createStore(changeBasket);
window.store = store.getState();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


