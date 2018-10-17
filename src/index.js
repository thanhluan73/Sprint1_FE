import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
 
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

import { createStore, applyMiddleware ,compose} from 'redux'; 
import { Provider } from 'react-redux';
import appReducers from './redux/index';
import thunk from 'redux-thunk';

import { ConnectedRouter,connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
const reactRouterMiddleware = routerMiddleware(history); 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [ thunk, reactRouterMiddleware ];
const store = createStore(
    connectRouter(history)(appReducers), 
    composeEnhancer(
        applyMiddleware(...middleWares)
    ),
);
window.store = store;
ReactDOM.render(
    <Provider store={store}>
     <ConnectedRouter history={history}>
        <App history={history}/>    
     </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
