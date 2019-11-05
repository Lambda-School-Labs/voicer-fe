import axios from 'axios';

export const LOGIN_START = 'LOGIN-START';
export const LOGIN_SUCCESS = 'LOGIN-SUCCESS';
export const LOGIN_FAILED = 'LOGIN-FAILED';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    if (!creds.username) {
        dispatch({ type: LOGIN_FAILED, error: 'Username not correct' });
    }
    if (!creds.password) {
        dispatch({ type: LOGIN_FAILED, error: 'Password not correct' });
    }
    return axios
        .post('https://voicer-lambda-app-staging.herokuapp.com/api/auth/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', res.data.userId);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            if(err) {
                localStorage.removeItem('token')
            } else {
                dispatch({
                    type: LOGIN_FAILED,
                    payload: 'FAILED'
                })
            }
        })
};