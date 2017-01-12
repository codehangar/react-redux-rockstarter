import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import New from './components/New';

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
