import * as types from '../action-types';

export default function(state = '', action) {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
}
