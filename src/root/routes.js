import React from 'react';
import { Route, Switch } from 'react-router';
import App from './app';
import FilterableTable from '../product-table/filterable-table';
import About from '../about/about';
import People from '../people/people';
import GridDemo from '../grid-demo/grid-demo';

export default (
    <Route path="/">
        <App>
            <Switch>
                <Route exact path="/" component={FilterableTable}/>
                <Route path="/about" component={About}/>
                <Route path="/about/lower" component={About}/>
                <Route path="/people" component={People}/>
                <Route path="/people/:id" component={People}/>
                <Route path="/people/:id/test" component={People}/>
                <Route path="/grid-demo" component={GridDemo}/>
            </Switch>
        </App>
    </Route>
);
