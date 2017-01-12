import * as types from '../action-types';

// ------------------------------------
// Actions
// ------------------------------------
export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
// export const updateLocation = ({ dispatch }) => {
//   return (nextLocation) => dispatch(locationChange(nextLocation))
// }

// ------------------------------------
// Reducer
// ------------------------------------
// const initialState = null
// export default function locationReducer (state = initialState, action) {
//   return action.type === LOCATION_CHANGE
//     ? action.payload
//     : state
// }
