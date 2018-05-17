import { combineReducers } from 'redux';

// import individual reducers
import { partnerReducers } from './partnerReducers';
// .. blog reducers

// export combined reducers
export default combineReducers({
    partners: partnerReducers,
})
