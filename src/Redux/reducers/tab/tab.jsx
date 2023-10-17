import { SET_TAB_DATA } from '../actions/tabData';

const initialState = {
  tabData: {}, 
};

const tabDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAB_DATA:
      return {
        ...state,
        tabData: action.payload, 
      };
    default:
      return state;
  }
};

export default tabDataReducer;
