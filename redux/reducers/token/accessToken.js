import {
    ACCESS_TOKEN,
    ACCESS_TOKEN_FAIL,
    ACCESS_TOKEN_SUCCESS
  } from '../../../constants/ActionTypes';
  
  const initialState = {
    resultData: {
        result: {
            accessToken: "",
            tokenType: "",
            expiresIn: "",
            refreshToken: "",
            uid: ""
        },
        status: 0,
        message: ""
    }
  };
  
  const accessToken = (state = initialState, { type, payload }) => {
    switch (type) {
      case ACCESS_TOKEN:
        return {...state, ...payload};
      case ACCESS_TOKEN_FAIL:
        return initialState;
      case ACCESS_TOKEN_SUCCESS:
        return {
          ...state,
          resultData: payload
        };  
      default:
        return state;
    }
  };
  
  export default accessToken;
  