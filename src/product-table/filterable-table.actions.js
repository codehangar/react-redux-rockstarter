import * as types from '../action-types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

