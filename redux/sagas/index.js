import { all } from 'redux-saga/effects';
// import tokenSagas from './token';
import blogSagas from './blog';

export default function * rootSagas() {
  yield all([
    ...blogSagas
  ]);
}
