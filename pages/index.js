import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadData, tickClock, startClock } from '../redux/actions';
import PropTypes from 'prop-types';
import Page from '../components/page';

function Index() {

  useEffect(() => {
    startClock();
  });

  return (
    <Page title='Index Page' linkTo='/other' NavigateTo='Other Page' />
  );
}

Index.getInitialProps = ({ctx}) => {
  const { store, isServer } = ctx;
  store.dispatch(tickClock(isServer));

  if (!store.getState().placeholderData) {
    store.dispatch(loadData());
  }

  return { isServer };
};

Index.propTypes = {
  startClock: PropTypes.func.isRequired
};

// const mapStateToProps = ({ count }) => ({ count });

const mapDispatchToProps = dispatch => ({
  startClock() {
    dispatch(startClock());
  }
});
export default connect(mapDispatchToProps )(Index);
