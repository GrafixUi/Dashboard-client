import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  DELETE_CUSTOMER,
} from '../../actions/Customer/customers';

const initialState = {
  customers: [],
  loading: false,
  error: null,
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_REQUEST:
      return { ...state, loading: true };

    case FETCH_CUSTOMERS_SUCCESS:
      return { ...state, loading: false, customers: action.payload, error: null };

    case FETCH_CUSTOMERS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_CUSTOMER:
      const updatedCustomers = state.customers.filter((customer) => customer.kad_id !== action.payload);
      return { ...state, customers: updatedCustomers };

    default:
      return state;
  }
};

export default customersReducer;
