import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Counter from './counter';
import Clock from './clock';

function Page ({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title
}) {
  return (
    <div>
      <h1>{title}- {lastUpdate}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  );
}

Page.defaultProps = {
  error: false,
  lastUpdate: Math.round((new Date()).getTime() / 1000),
  light: false,
  linkTo: "",
  placeholderData: [],
  NavigateTo: "",
  title: ""
};

Page.propTypes = {
  error: PropTypes.bool,
  lastUpdate: PropTypes.number,
  light: PropTypes.bool,
  linkTo: PropTypes.string,
  NavigateTo: PropTypes.string,
  placeholderData: PropTypes.array,
  title: PropTypes.string
};

export default connect(state => state)(Page);
