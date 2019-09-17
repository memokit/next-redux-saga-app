import { useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import _ from 'lodash';

function Blog(props) {
  const { resultData } = props;

  const [data, setData] = useState({ ...resultData });

  const updateData = () => {
    if (_.isNil(data) || _.isNil(data.author)) {      
      setData(prevData => prevData);
    } else {
      setData(resultData);
    }
  };

  useEffect(() => {
    updateData();
  }, [resultData]);

  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <div>
        Hello My Blog =>
        {resultData.author}
      </div>
    </>
  );
}


Blog.defaultProps = {
  resultData: null,
};

Blog.propTypes = {
  resultData: PropTypes.object
};

export default Blog;
