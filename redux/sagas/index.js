import { all } from 'redux-saga/effects';
import blogSagas from './blog/index';

export default function * rootSagas() {
  yield all([
    ...blogSagas
  ]);
}
