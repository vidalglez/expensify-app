import React from 'react';
import { shallow } from 'enzyme';
import {login, logout} from '../../actions/auth';

test('Should perform login action', () =>{
    const action = login('user123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'user123'
    });
});

test('Should perform logout action', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});