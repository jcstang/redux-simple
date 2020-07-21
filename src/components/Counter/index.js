import React from "react";
// import styles from "./Counter.module.css";
import styles from "./index.css";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          // onClick={() => dispatch(decrement())}
          onClick={props.onDecrementCounter}
        >
          -
        </button>
        <span className={styles.value}>{props.myReduxNumber}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={props.onIncrementCounter}
        >
          +
        </button>
      </div>
    </div>
  );
}

// *** REDUX ***
const mapStateToProps = (state) => {
  return {
    myReduxNumber: state.counter,
    myReduxMessage: state.msg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    hiButtonPressed: () =>
      dispatch({ type: "NEW_MESSAGE", newMsg: "Well Hello there, Redux." }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
