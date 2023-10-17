import { combineReducers } from 'redux';
import customersReducer from './Customers/customers';

const rootReducer = combineReducers({
  customers: customersReducer,
});

export default rootReducer;