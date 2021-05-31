import { createReducer, on } from '@ngrx/store';
import { login, logout } from './test.action';

export const initialState = {username: ''};

const _authReducer = createReducer(
    initialState,
    on(login, (state) => state= {username: 'user'}),
    on(logout, (state) => initialState)
);

export function authReducer(state, action) {
    return _authReducer(state, action);
}