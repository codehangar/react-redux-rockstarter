import * as types from '../action-types';
import 'whatwg-fetch';

const initialState = {
    loading: false
};

export function people(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_PEOPLE:
            return {
                loading: true,
                data: null
            };
        case types.RECEIVE_PEOPLE:
            return {
                loading: false,
                data: action.data
            };
        default:
            return state;
    }
}
