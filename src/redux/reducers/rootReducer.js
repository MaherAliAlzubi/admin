import { combineReducers } from 'redux';
import seniorReducer from './seniorReducer.js';
import juniorReducer from './juniorReducer.js';
import internReducer from './internReducer.js';

const rootReducer = combineReducers({
    seniors: seniorReducer,
    juniors: juniorReducer,
    interns: internReducer
});

export default rootReducer;