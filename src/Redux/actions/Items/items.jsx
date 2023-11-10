import axios from 'axios';
import { toast } from 'react-toastify';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const DELETE_ITEM = 'DELETE_ITEM';

export const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = (items) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items,
});

export const fetchItemsFailure = (error) => ({
  type: FETCH_ITEMS_FAILURE,
  payload: error,
});

export const deleteItemSuccess = (item_Id) => ({
  type: DELETE_ITEM,
  payload: item_Id,
});

export const deleteItem = (item_Id) => async (dispatch) => {
  try {
    await axios.delete(`https://dashboard-server-j55a.onrender.com/api/items/${item_Id}`);
    dispatch(deleteItemSuccess(item_Id));
    window.location.reload();
    toast.error('Item has been deleted successfully');
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
    toast.error('Error deleting item');
  }
};

export const fetchItems = () => async (dispatch) => {
  dispatch(fetchItemsRequest());

  try {
    const response = await axios.get('https://dashboard-server-j55a.onrender.com/api/items'); 
    dispatch(fetchItemsSuccess(response.data));
  } catch (error) {
    dispatch(fetchItemsFailure(error.message));
    toast.error('Error Fetching Item');
  }
};
