import {
  TOKEN,
  TOKEN_FAIL,
  TOKEN_SUCCESS,
  REFRESH_TOKEN,
  REFRESH_TOKEN_FAIL,
  REFRESH_TOKEN_SUCCESS,
  ACCESS_TOKEN,
  ACCESS_TOKEN_FAIL,
  ACCESS_TOKEN_SUCCESS
} from '../../constants/ActionTypes';

export function token(payload) {
  return {
    type: TOKEN,
    payload
  };
}

export function tokenSuccess() {
  return {
    type: TOKEN_SUCCESS
  };
}

export function tokenFail() {
  return {
    type: TOKEN_FAIL,
  };
}

export function refreshToken(payload) {
  return {
    type: REFRESH_TOKEN,
    payload
  };
}

export function refreshTokenSuccess(payload) {
  return {
    type: REFRESH_TOKEN_SUCCESS,
    payload
  };
}

export function refreshTokenFail() {
  return {
    type: REFRESH_TOKEN_FAIL,
  };
}

export function accessToken(payload) {
  return {
    type: ACCESS_TOKEN,
    payload
  };
}

export function accessTokenSuccess(payload) {
  return {
    type: ACCESS_TOKEN_SUCCESS,
    payload
  };
}

export function accessTokenFail() {
  return {
    type: ACCESS_TOKEN_FAIL,
  };
}