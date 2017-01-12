import rootReducer from './reducer';
import * as types from './action-types';

describe('rootReducer', () => {

  beforeEach(function() {

  });

  describe('filter', () => {
    it('should set a new filter', () => {
      const state = {};
      const filter = 'someString';
      const action = {
        type: types.FILTER,
        filter
      };
      let nextState = rootReducer(state, action);

      expect(nextState).to.deep.equal({
        filter: 'someString',
        routing: {
          locationBeforeTransitions: null
        }
      });
    });
  });

});
