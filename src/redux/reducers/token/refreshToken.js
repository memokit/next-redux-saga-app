import {
    REFRESH_TOKEN,
    REFRESH_TOKEN_FAIL,
    REFRESH_TOKEN_SUCCESS
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
  
  const refreshToken = (state = initialState, { type, payload }) => {
    switch (type) {
      case REFRESH_TOKEN:
        return {...state, ...payload};
      case REFRESH_TOKEN_FAIL:
        return initialState;
      case REFRESH_TOKEN_SUCCESS:
        return {
          ...state,
          resultData: payload
        };  
      default:
        return state;
    }
  };
  
  export default refreshToken;
  