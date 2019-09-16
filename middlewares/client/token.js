// import { message } from 'antd';
// import {
//   FETCH_ITEM_FAIL
// } from '../../constants/ActionTypes';
import _ from 'lodash';

export default () => next => action => {
  const ret = next(action);


  // const { tokens } = getState().auth;

  console.log("==== Start Token Middle =======");
  if(!_.isNil(ret.isRequest) && ret.isRequest){
    console.log("request");
  }
  console.log("==== End Token Middle =======");
  // switch (action.type) {
  //   case FETCH_ITEM_FAIL: {
  //     message.error('Fetch item fail');
  //     break;
  //   }
  //   default:
  // }
  return ret;
};
