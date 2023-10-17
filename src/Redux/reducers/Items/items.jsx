import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    DELETE_ITEM,
  } from '../../actions/Items/items';
  
  const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ITEMS_REQUEST:
        return { ...state, loading: true };
  
      case FETCH_ITEMS_SUCCESS:
        return { ...state, loading: false, items: action.payload, error: null };
  
      case FETCH_ITEMS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case DELETE_ITEM:
        const updatedItems = state.items.filter((item) => item.items_Id !== action.payload);
        return { ...state, items: updatedItems };
  
      default:
        return state;
    }
  };
  
  export default itemsReducer;
  