import {LOG_IN, LOG_OUT} from '../Actions/Types';

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
