import { createStore } from 'redux';
import rootReducer from '../reducer';
import DevTools from '../dev-tools/dev-tools';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        DevTools.instrument()
    );

    return store;
}
