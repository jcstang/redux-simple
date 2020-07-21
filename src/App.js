import React from "react";
import logo from "./logo.svg";
import "./App.css";

// *** REDUX ***
import { connect } from "react-redux";
import Counter from "./components/Counter";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.myReduxMessage}</p>
        <button className="button" onClick={props.hiButtonPressed}>
          Say hi to Redux
        </button>
        <Counter />
        <p>
          Brought to you by &nbsp;
          <a
            className="App-link"
            href="https://github.com/jcstang"
            target="_blank"
            rel="noopener noreferrer"
          >
            jcstang
          </a>
          &nbsp; on GitHub
        </p>
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
