import {CREATE_EVENT, GET_ALL_EVENT, GET_EVENT} from './Types';

export const addEvent = item => {
  return {
    type: CREATE_EVENT,
    payload: item,
  };
};

export const getAllEvent = () => {
  return {
    type: GET_ALL_EVENT,
  };
};

export const getEvent = id => {
  return {
    type: GET_EVENT,
    payload: id,
  };
};
