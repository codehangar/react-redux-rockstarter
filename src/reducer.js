// import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import filter from './product-table/filterable-table.reducer';
import people from './people/people.reducer';
import auth from './utils/auth.reducer';


const rootReducer = combineReducers({
    filter,
    people,
    auth
});

export default rootReducer;
