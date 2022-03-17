import {CREATE_EVENT, GET_ALL_EVENT, GET_EVENT} from '../Actions/Types';

const initialState = {
  events: [],
  singleEvent: {},
};

let id = 0;
const listReducer = (state = initialState, action) => {
  console.log('in reducer', action.payload);
  console.log('in reducer state', state);
  switch (action.type) {
    case CREATE_EVENT:
      const newitem = {
        id: ++id,
        value: action.payload,
      };
      console.log('newItem', newitem);
      return {
        ...state,
        events: state?.events.concat(newitem),
      };

    case GET_EVENT:
      let newArr = state?.events;
      return {
        ...state,
        singleEvent: newArr.filter(item => item?.id !== action.payload),
      };

    case GET_ALL_EVENT:
      return state;

    default:
      return state;
  }
};

export default listReducer;
