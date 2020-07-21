import React from "react";
import logo from "./logo.svg";
import "./App.css";

// *** REDUX ***
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.myReduxMessage}</p>
        <button onClick={props.hiButtonPressed}>Say hi to Redux</button>
        <h3>here is props: {props.myReduxNumber}</h3>
        <button onClick={props.onIncrementCounter}>+</button>
        <button onClick={props.onDecrementCounter}>-</button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
