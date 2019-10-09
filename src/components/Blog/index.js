import { useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { blogData } from './../../initialData/blogData';
import _ from 'lodash';

function Blog(props) {
  const { resultData } = props;

  console.log("-------------------");
  
  console.log(resultData);
  console.log("-------------------");

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
        {resultData.result.title}
      </div>
    </>
  );
}


Blog.defaultProps = {
  ...blogData
};

Blog.propTypes = {
  resultData: PropTypes.object
};

export default Blog;
