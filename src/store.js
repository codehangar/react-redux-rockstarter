import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import DevTools from './root/dev-tools';

// Create a history of your choosing (we're using a browser history in this case)
export const history    = createBrowserHistory();
const middleware = routerMiddleware(history);

let enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(thunk),
    // Middleware to issue navigation events via Redux actions
    applyMiddleware(middleware),
);

if (process.env.NODE_ENV !== 'production') {
    // Enable Redux DevTools with the monitors you chose
    enhancer = compose(enhancer, DevTools.instrument());
}

const initialState = {};
export default createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    // rootReducer,
    initialState,
    enhancer
);

