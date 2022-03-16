import {LOG_IN, LOG_OUT} from './Types';

export const logIn = () => async dispatch => {
  dispatch({
    type: LOG_IN,
    payload: true,
  });
};
export const logOut = () => async dispatch => {
  dispatch({
    type: LOG_OUT,
    payload: false,
  });
};
