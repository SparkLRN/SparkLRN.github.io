import { combineReducers } from 'redux';

// import individual reducers
import { partnerReducers } from './partnerReducers';
import { reviewReducers } from './reviewReducers';
// .. blog reducers

// export combined reducers
export default combineReducers({
    partners: partnerReducers,
    reviews: reviewReducers,
})
