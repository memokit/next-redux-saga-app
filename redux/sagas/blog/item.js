// import fetch from 'isomorphic-unfetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  FETCH_ITEM,
} from '../../../constants/ActionTypes';
import { fetchItemDataFail, fetchItemDataSuccess } from '../../actions/blog';
// import token from '../token/token';
import fetch from '../../../core/fetchUtil';
import api from '../../../constants/ApiUrl';
/**
 * userItem saga
 */
export function * blogItem() {
  
  while (true) {
    const { payload } =  yield take(FETCH_ITEM);
    
    try {
      // yield token();
      const res = yield fetch(api.getItem+"/"+payload.id);
      // const res = yield nextFetch(api.getItem+"/"+payload.id);
      // const data = yield res;
      const data = yield res.json();
      yield put(fetchItemDataSuccess(data));
    } catch (error) {
      yield put(fetchItemDataFail(error));
    }
  }
}

export default [
  fork(blogItem)
];




