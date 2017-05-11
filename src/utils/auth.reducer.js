import * as types from '../action-types';

const initialState = {
    user: null,
    redirectUrl: '/',
    loggingIn: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.SET_USER:
            return { ...state, user: action.user, loggingIn: false };
        case types.SET_REDIRECT_URL:
            return { ...state, redirectUrl: action.redirectUrl };
        case types.LOGGING_IN:
            return { ...state, loggingIn: true };
        default:
            return state;
    }
}
