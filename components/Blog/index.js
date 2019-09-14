// import { useEffect  } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
// import { fetchItemData } from '../../redux/actions/blog';

function Blog(props) {
  const { result } = props;
  console.log("Blog Result");
  console.log(result);
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
        {/* {result.author} */}
      </div>
    </>
  );
}


// Blog.defaultProps = {
//   result: null,
// };

Blog.propTypes = {
  result: PropTypes.object.isRequired
  // isServer: PropTypes.bool.isRequired
};

export default Blog;
