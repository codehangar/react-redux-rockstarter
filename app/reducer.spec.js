import rootReducer from './reducer';

describe('rootReducer', () => {

    it('should set initialState', () => {
        let nextState = rootReducer(void 0, {});

        expect(nextState).to.deep.equal({
            filter: '',
            people: {
                loading: false
            },
            routing: {
                locationBeforeTransitions: null
            }
        });
    });

});
