// ***************************************************************************
// Componeent - Counter
// main file: index.js
// css: index.css
// ***************************************************************************

import React from 'react';
import './index.css';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>
      <div className='row'>
        <button
          className='button'
          aria-label='Decrement value'
          onClick={props.onDecrementCounter}
        >
          -
        </button>
        <span className='value'>{props.myReduxNumber}</span>
        <button
          className='button'
          aria-label='Increment value'
          onClick={props.onIncrementCounter}
        >
          +
        </button>
      </div>
    </div>
  );
}

// *** REDUX ***
// =============================================================
const mapStateToProps = (state) => {
  return {
    myReduxNumber: state.counter,
    myReduxMessage: state.msg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
    hiButtonPressed: () =>
      dispatch({ type: 'NEW_MESSAGE', newMsg: 'Well Hello there, Redux.' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);


//
// TODO: how do we make mapDispatchToProps less complex. extract action types out??
// import { connect } from 'react-redux'
// import { increment, decrement, reset } from './actionCreators'

// // const Counter = ...

// const mapStateToProps = (state /*, ownProps*/) => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = { increment, decrement, reset }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)