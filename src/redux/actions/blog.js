import {
  FETCH_ITEM,
  FETCH_ITEM_FAIL,
  FETCH_ITEM_SUCCESS
} from '../../constants/ActionTypes';

export function fetchItemData (payload) {
  return {
    type: FETCH_ITEM,
    isRequest: true,
    payload
  };
}

export function fetchItemDataSuccess (payload) {
  return {
    type: FETCH_ITEM_SUCCESS,
    isRequest: false,
    payload
  };
}

export function fetchItemDataFail () {
  return {
    type: FETCH_ITEM_FAIL,
  };
}