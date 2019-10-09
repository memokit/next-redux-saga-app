import { combineReducers } from 'redux';
import refreshToken from './refreshToken';
import accessToken from './accessToken';

export default combineReducers({
  refreshToken,
  accessToken
});