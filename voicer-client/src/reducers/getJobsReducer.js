import {
    GET_JOBS_START,
    GET_JOBS_SUCCESS,
    GET_JOBS_FAILED
} from '../actions';

const initialState = {
    gettingJobs: false,
    error: null,
    jobs: []
}

export const getJobsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_JOBS_START:
            return {
                ...state,
                gettingJobs: true,
                error: null
            }
        case GET_JOBS_SUCCESS:
            return {
                ...state,
                gettingJobs: false,
                error: false,
                jobs: action.payload
            }
        case GET_JOBS_FAILED:
            return {
                ...state,
                gettingJobs: false,
                error: true
            }
        default: return state;
    }
}