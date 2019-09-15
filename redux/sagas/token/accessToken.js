import fetch from 'isomorphic-unfetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  ACCESS_TOKEN,
} from '../../../constants/ActionTypes';
import { accessTokenFail, accessTokenSuccess } from '../../actions/token';
import api from '../../../constants/ApiUrl';

/**
 * Access Token saga
 */
export function * accessToken() {
  
  while (true) {
    const { payload } =  yield take(ACCESS_TOKEN);
    
    try {
      const res = yield fetch(api.getItem, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload })
      });
      const data = yield res.json();
      yield put(accessTokenSuccess(data));
    } catch (error) {
      yield put(accessTokenFail(error));
    }
  }
}

export default [
  fork(accessToken)
];