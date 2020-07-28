import { INCREMENT, DECREMENT, NEW_MESSAGE } from '../actionTypes';

const initialState = {
  counter: 0,
  msg: 'Hi from redux-land!!!!',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case DECREMENT: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }

    case NEW_MESSAGE: {
      return {
        ...state,
        // TODO: check this out if something breaks
        msg: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
