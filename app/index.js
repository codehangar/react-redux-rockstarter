import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

render(
    <AppContainer>
      <MuiThemeProvider>
        <Root store={store} history={history} />
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
              <MuiThemeProvider>
                <NewRoot store={store} history={history} />
              </MuiThemeProvider>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
