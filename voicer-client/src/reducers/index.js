import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { postJobReducer } from './postJobReducer';
import { getJobsReducer } from './getJobsReducer';

export default combineReducers({
    registerReducer,
    loginReducer,
    postJobReducer,
    getJobsReducer
});