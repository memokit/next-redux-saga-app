import { useState, useEffect  } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import { fetchItemData } from '../../redux/actions/blog';

function Blog(props) {
  const { resultData } = props;

  const [data, setData] = useState({...resultData});

  // useEffect(() => {
  //   // const subscription = props.resultData.subscribe();

  //   console.log("subscription");
  //   console.log(props);
  //   console.log("subscription");
  //   // return () => {
  //   //   // Clean up the subscription
  //   //   subscription.unsubscribe();
  //   // };
  // });

  const updateData = () => {
    if(_.isNil(data) || _.isNil(data.author)){
      console.log("+++++++++++++++++++++++ O L D+++++++++++++++++++++++p");
      setData(prevData => prevData);
    }
  };


  useEffect(() => {
    updateData();
  }, [resultData]);
  
  // setData( prevData => {
  //   console.log("+++++++++++++++++++++++prevData+++++++++++++++++++++++p");
  //   console.log(prevData);
  //   console.log(resultData);
  //   console.log("+++++++++++++++++++++++prevData+++++++++++++++++++++++p");
  //   // if (!_.isNil(resultData) && !_.isNil(resultData.author)){
  //   //   resultData;
  //   // } else {
  //   //   prevData;
  //   // }
  //   return {...resultData};
  // });
  console.log("Blog Result");
  console.log(resultData);
  // console.log(props.result);
  console.log("===========Blog Result===============");
  // const data = {
  //   id: 1
  // };
  // useEffect(() => 
  //   fetchItemData(data)
  // , []);


  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <div>
        Hello My Blog => 
        {data.author}
      </div>
    </>
  );
}


Blog.defaultProps = {
  resultData: null,
};

Blog.propTypes = {
  resultData: PropTypes.object
  // isServer: PropTypes.bool.isRequired
};

export default Blog;
