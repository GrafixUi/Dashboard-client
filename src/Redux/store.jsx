import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import customersReducer from './reducers/Customers/customers';
import itemsReducer from './reducers/Items/items';

const rootReducer = combineReducers({
  customers: customersReducer,
  items: itemsReducer, 
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
