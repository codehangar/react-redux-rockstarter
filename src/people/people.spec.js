import reducer from './people.reducer';
import * as types from '../action-types';

describe('people reducer', () => {

    beforeEach(function() {
    });

    it('should set initialState', () => {
        let nextState = reducer(void 0, {});
        expect(nextState).to.deep.equal({
            loading: false
        });
    });

    it('should set people data', () => {
        const state   = {
            loading: true
        };
        const data    = [{ name: 'Luke' }];
        const action  = {
            type: types.RECEIVE_PEOPLE,
            data: data
        };
        let nextState = reducer(state, action);

        expect(nextState).to.deep.equal({
            loading: false,
            data: [{ name: 'Luke' }]
        });
    });

});
