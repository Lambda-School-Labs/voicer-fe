import {
    POST_JOB_START,
    POST_JOB_SUCCESS,
    POST_JOB_FAILED
} from '../actions';

const initialState = {
    postingJob: false,
    error: null
}

export const postJobReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_JOB_START:
            return {
                ...state,
                postingJob: true,
                error: null
            }
        case POST_JOB_SUCCESS:
            return {
                ...state,
                postingJob: false,
                error: false
            }
        case POST_JOB_FAILED:
            return {
                ...state,
                postingJob: false,
                error: true
            }
        default: return state;
    }
}