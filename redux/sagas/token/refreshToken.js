import fetch from 'isomorphic-unfetch';
import { take, put, fork } from 'redux-saga/effects';
import {
  REFRESH_TOKEN,
} from '../../../constants/ActionTypes';
import { refreshTokenFail, refreshTokenSuccess } from '../../actions/token';
import api from '../../../constants/ApiUrl';

/**
 * Refresh Token saga
 */
export function * refreshToken() {
  
  while (true) {
    const { payload } =  yield take(REFRESH_TOKEN);
    
    try {
      const res = yield fetch(api.getItem, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payload })
      });
      const data = yield res.json();
      yield put(refreshTokenSuccess(data));
    } catch (error) {
      yield put(refreshTokenFail(error));
    }
  }
}

export default [
  fork(refreshToken)
];