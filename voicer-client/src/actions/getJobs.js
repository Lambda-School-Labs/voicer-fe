import axios from 'axios';

export const GET_JOBS_START = 'GET_JOBS-START';
export const GET_JOBS_SUCCESS = 'GET_JOBS-SUCCESS';
export const GET_JOBS_FAILED = 'GET_JOBS-FAILED';

export const getJobs = () => dispatch => {
    dispatch({ type: GET_JOBS_START });
    return axios
        .get('https://voicer-lambda-app-staging.herokuapp.com/api/jobs')
        //.get('http://localhost:4000/api/jobs')
        .then(res => {
            dispatch({
                type: GET_JOBS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_JOBS_FAILED,
                payload: err
            })
        })
};