// import fetch from 'isomorphic-unfetch';
import { put } from 'redux-saga/effects';
// import {
//   TOKEN_FAIL,
//   TOKEN_SUCCESS
// } from '../../../constants/ActionTypes';
import { tokenFail, tokenSuccess } from '../../actions/token';
// import api from '../../../constants/ApiUrl';
import refreshToken from './refreshToken';
/**
 * Token saga
 */
export function * token() {
  let data = {
    refreshToken: "",
    accessToken: ""
  };

  try {
    yield refreshToken();
    yield put(tokenSuccess());
  } catch (error) {
    yield put(tokenFail());
  }

  return data.refreshToken = "123456789";
}

export default [
  token
];