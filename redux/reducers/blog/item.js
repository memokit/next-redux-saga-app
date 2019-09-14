import {
  FETCH_ITEM,
  FETCH_ITEM_FAIL,
  FETCH_ITEM_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  result: {}
};

const item = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ITEM:
      return {...payload};
    case FETCH_ITEM_FAIL:
      return initialState;
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        result: payload
      };  
    default:
      return state;
  }
};

export default item;
