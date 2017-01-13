import * as types from '../action-types';
import fetch from '../utils/fetch';

export function receivePeople(people, error) {
    return {
        type: types.RECEIVE_PEOPLE,
        people,
        error
    };
}


export function fetchPeople(id) {
    return (dispatch) => {
        dispatch({ type: types.FETCH_PEOPLE });
        return fetch(`/people/${id || ''}`)
            .then(data => {
                return dispatch({
                    type: types.RECEIVE_PEOPLE,
                    data: data.results
                });
            })
            .catch(error => {
                return dispatch(receivePeople(null, error));
            });
    };
}
