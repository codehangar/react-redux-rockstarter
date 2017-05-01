import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import routes from './routes';
import DevTools from './dev-tools';
import { ConnectedRouter } from 'connected-react-router';

let devTools = <DevTools/>;
if (process.env.NODE_ENV === 'production') {
    devTools = '';
}

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <ConnectedRouter history={history} children={routes}/>
                    {devTools}
                </div>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
