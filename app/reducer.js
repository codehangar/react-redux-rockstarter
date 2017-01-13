import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { filter } from './product-table/filterable-table.reducer';
import { people } from './people/people.reducer';


const rootReducer = combineReducers({
    filter,
    people,
    routing
});

export default rootReducer;
