import fetch from 'isomorphic-unfetch';
// import fetch from 'isomorphic-fetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_ITEM,
} from '../../../constants/ActionTypes';
import { fetchItemDataFail, fetchItemDataSuccess } from '../../actions/blog';
// import token from '../token/token';
// import fetch from '../../../core/fetchUtil';
// import fetch from '../../../core/nextFetch';
import headerUtil from '../../../core/headerUtil';
import { hostPath } from '../../../core/util';
import api from '../../../constants/ApiUrl';

/**
 * userItem saga
 */
export function* blogItem() {
 
  
  while (true) {
    const { payload } = yield take(FETCH_ITEM);

    try {
      console.log(payload.id);
      
      
      const header = yield headerUtil();
      // yield token();
      // const res = yield fetch(api.getItem + "/" + payload.id, {
        console.log("------ P A T H ------");
        
        console.log(hostPath(api.getItem));
        console.log("------ End P A T H ------");
      const res = yield fetch(hostPath(api.getItem), header);
      // const res = yield nextFetch(api.getItem+"/"+payload.id);
      // const data = yield res;
      const data = yield res.json();
      console.log(data);
      yield put(fetchItemDataSuccess(data));
    } catch (error) {
      yield put(fetchItemDataFail(error));
    }
  }
}

export default [
  fork(blogItem)
];




