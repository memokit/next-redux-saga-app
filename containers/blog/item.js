import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchItemData } from '../../redux/actions/blog';
import Blog from '../../components/Blog';

// const mapStateToProps = state => ({
//   result: "TTTTTTT"//state.blog.item.result
// });


const mapStateToProps = (state) => {
  console.log("***********Container**************");
  console.log(state);
  
  return { resultData: state.blog.item.resultData };
};

// const mapDispatchToProps = dispatch => ({
//   fetchItemData: bindActionCreators(fetchItemData, dispatch)
// });

const mapDispatchToProps = dispatch => ({
  fetchItemData: () => dispatch(fetchItemData)
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
