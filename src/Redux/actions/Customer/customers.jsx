import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FETCH_CUSTOMERS_REQUEST = 'FETCH_CUSTOMERS_REQUEST';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';

export const DELETE_CUSTOMER_REQUEST = 'DELETE_CUSTOMER_REQUEST';
export const DELETE_CUSTOMER_SUCCESS = 'DELETE_CUSTOMER_SUCCESS';
export const DELETE_CUSTOMER_FAILURE = 'DELETE_CUSTOMER_FAILURE';

export const CREATE_CUSTOMER_REQUEST = 'CREATE_CUSTOMER_REQUEST';
export const CREATE_CUSTOMER_SUCCESS = 'CREATE_CUSTOMER_SUCCESS';
export const CREATE_CUSTOMER_FAILURE = 'CREATE_CUSTOMER_FAILURE';

export const fetchCustomers = () => async (dispatch) => {
  dispatch({ type: FETCH_CUSTOMERS_REQUEST });

  try {
    const response = await axios.get('http://localhost:5000/api/customers');
    dispatch({ type: FETCH_CUSTOMERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_CUSTOMERS_FAILURE, payload: error.message });
  }
};

export const deleteCustomer = (kad_id) => async (dispatch) => {
  dispatch({ type: DELETE_CUSTOMER_REQUEST });

  try {
    await axios.delete(`http://localhost:5000/api/customers/${kad_id}`);
    dispatch({ type: DELETE_CUSTOMER_SUCCESS, payload: kad_id });
    toast.success('Customer has been deleted successfully');
    window.location.reload();
  } catch (error) {
    dispatch({ type: DELETE_CUSTOMER_FAILURE, payload: error.message });
    toast.error('Error deleting customer');
  }
};

export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export const createCustomer = (customerData) => async (dispatch) => {
  dispatch({ type: CREATE_CUSTOMER_REQUEST });

  try {
    const response = await axios.post('http://localhost:5000/api/customers', customerData);
    dispatch({ type: CREATE_CUSTOMER_SUCCESS, payload: response.data });
    toast.success('Customer has been Created successfully');
  } catch (error) {
    dispatch({ type: CREATE_CUSTOMER_FAILURE, payload: error.message });
  }
};