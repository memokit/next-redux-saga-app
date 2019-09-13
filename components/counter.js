import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement, reset } from '../redux/actions';

class Counter extends Component {

  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  }

  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
  };

  render () {
    const { count } = this.props;
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

const mapStateToProps = ({ count }) => ({ count });

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch(increment());
  },
  decrement() {
    dispatch(decrement());
  },
  reset() {
    dispatch(reset());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
