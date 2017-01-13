import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import {browserHistory} from 'react-router';
import DevTools from '../dev-tools/dev-tools';

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunk),
    // Middleware to issue navigation events via Redux actions
    applyMiddleware(routerMiddleware(browserHistory)),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        enhancer
    );
}
