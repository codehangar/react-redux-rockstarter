import * as types from '../action-types';
import fetch from '../utils/fetch';
import { push } from 'connected-react-router';

export function whoAmI() {
    return (dispatch, getState) => {
        dispatch({ type: types.CHECKING_WHO_AM_I });
        return fetch(`/users/me`)
            .then(data => {
                console.log('data', data); // eslint-disable-line no-console
                dispatch({
                    type: types.SET_USER,
                    user: data.result
                });

                const redirectUrl = getState().auth.redirectUrl || '/';
                dispatch(push(redirectUrl));
            })
            .catch((error) => {
                console.log('error', error); // eslint-disable-line no-console
                console.log('error.message', error.message); // eslint-disable-line no-console
                // return dispatch(receivePeople(null, error));
            });
    };
}

export function login(body) {
    console.log('body', body); // eslint-disable-line no-console
    return (dispatch) => {
        dispatch({ type: types.LOGGING_IN });
        return fetch(`/auth/login`, {
            method: 'POST',
            body
        })
            .then(() => {
                dispatch(whoAmI());
            })
            .catch((error) => {
                console.log('error', error); // eslint-disable-line no-console
                console.log('error.message', error.message); // eslint-disable-line no-console
                console.log('error.response', error.response); // eslint-disable-line no-console
                // return dispatch(receivePeople(null, error));
            });
    };
}

