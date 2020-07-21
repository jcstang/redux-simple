const initialState = {
  counter: 0,
  msg: "Hi from redux-land!",
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "NEW_MESSAGE") {
    return {
      ...state,
      msg: action.newMsg,
    };
  }

  return state;
};

export default reducer;
