import reducer from './filterable-table.reducer';
import * as types from '../action-types';

describe('filter reducer', () => {

    beforeEach(function() {
    });

    it('should set initialState', () => {
        let nextState = reducer(void 0, {});
        expect(nextState).to.deep.equal('');
    });

    it('should set a new filter', () => {
        const state   = {};
        const filter  = 'someString';
        const action  = {
            type: types.FILTER,
            filter
        };
        let nextState = reducer(state, action);

        expect(nextState).to.equal('someString');
    });

});
