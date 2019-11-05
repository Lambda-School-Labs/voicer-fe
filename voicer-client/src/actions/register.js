import axios from 'axios';

export const REGISTER_START = 'REGISTER-START';
export const REGISTER_SUCCESS = 'REGISTER-SUCCESS';
export const REGISTER_FAILED = 'REGISTER-FAILED';

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    if (!creds.username) {
        dispatch({ type: REGISTER_FAILED, error: 'Please enter a username' });
    }
    if (!creds.password) {
        dispatch({ type: REGISTER_FAILED, error: 'Please enter a password' });
    } 
    if (!creds.firstName) {
        dispatch({ type: REGISTER_FAILED, error: 'Please enter your first name' });
    }
    if (!creds.lastName) {
        dispatch({ type: REGISTER_FAILED, error: 'Please enter your last name' });
    }
    if (!creds.email.includes('@') || !creds.email.includes('.')) {
        dispatch({ type: REGISTER_FAILED, error: 'Please enter a correct email' });
    }
    return axios
        .post('https://voicer-lambda-app-staging.herokuapp.com/api/auth/register', creds) // CHANGE URL
        .then(res => {
            localStorage.setItem('token', res.data.token)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAILED,
                payload: 'FAILED'
            })
        })
};