import authReducer from '../../reducers/auth';

test('Should set uid for login action', () => {
    const action = {
        type: 'LOGIN',
        uid: 'user123'
    };
    const state = authReducer({}, action);
    expect(state.uid).toEqual(action.uid);
});

test('Should clear uid for logout action', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'user123'}, action);
    expect(state).toEqual({});
});