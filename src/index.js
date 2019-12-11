import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//     // burgerBuilder: burgerBuilderReducer,
//     // order: orderReducer,
//     // auth: authReducer
// });

// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));

 // <Provider store={store}>
    //     <BrowserRouter>
    //         <App />
    //     </BrowserRouter>
    // </Provider>

const app = (   
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
