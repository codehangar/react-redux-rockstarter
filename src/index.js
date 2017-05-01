import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store, { history } from './store';
import Root from './root/root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render(
    <AppContainer>
        <MuiThemeProvider>
            <Root store={store} history={history}/>
        </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./root/root', () => {
        const NewRoot = require('./root/root').default;
        render(
            <AppContainer>
                <MuiThemeProvider>
                    <NewRoot store={store} history={history}/>
                </MuiThemeProvider>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
