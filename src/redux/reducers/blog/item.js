import {
  FETCH_ITEM,
  FETCH_ITEM_FAIL,
  FETCH_ITEM_SUCCESS
} from '../../../constants/ActionTypes';

import { blogData } from './../../../initialData/blogData';

const initialState = blogData;
// const initialState = {
//   resultData: {
//     result: {
//       title: ""
//     }
//   }
// };

const item = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ITEM:
      return {...state, ...payload};
    case FETCH_ITEM_FAIL:
      return initialState;
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        resultData: payload
      };  
    default:
      return state;
  }
};

export default item;
