import rootReducer from './reducer';

describe('rootReducer', () => {

    it('should set initialState', () => {
        let nextState = rootReducer(void 0, {});

        expect(nextState).to.deep.equal({
            auth: {
                user: null,
                redirectUrl: '/',
                loggingIn: false
            },
            filter: '',
            people: {
                loading: false
            }
        });
    });

});
