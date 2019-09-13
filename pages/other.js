import { Component } from 'react';
import { connect } from 'react-redux';

import { startClock, tickClock } from '../redux/actions';
import Page from '../components/page';

class Other extends Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));
    return { isServer };
  }

  render () {
    return <Page title='Other Page' linkTo='/' NavigateTo='Index Page' />;
  }
}

const mapDispatchToProps = dispatch => ({
  startClock() {
    dispatch(startClock());
  }
});

export default connect(mapDispatchToProps)(Other);
