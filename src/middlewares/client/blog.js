import { message } from 'antd';
import {
  FETCH_ITEM_FAIL
} from '../../constants/ActionTypes';

export default () => next => action => {
  const ret = next(action);
  switch (action.type) {
    case FETCH_ITEM_FAIL: {
      message.error('Fetch item fail');
      break;
    }
    default:
  }
  return ret;
};
