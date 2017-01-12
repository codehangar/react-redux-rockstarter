import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import FilterableTable from './product-table/filterable-table';
import About from './about/about';
import New from './new/new';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={FilterableTable} />
		<Route path="/about" component={About} />
		<Route path="/about/lower" component={About} />
		<Route path="/new" component={New} />
		<Route path="/new/:id" component={New} />
		<Route path="/new/:id/test" component={New} />
	</Route>
);
