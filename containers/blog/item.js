import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItemData } from '../../redux/actions/blog';
import Blog from '../../components/Blog';

// const mapStateToProps = state => ({
//   result: "TTTTTTT"//state.blog.item.result
// });


const mapStateToProps = (state) => {
  console.log("***********Container**************");
  console.log(state);
  
  return { result: state.blog.item.result };
};

const mapDispatchToProps = dispatch => ({
  fetchItemData: bindActionCreators(fetchItemData, dispatch)
});

// const mapDispatchToProps = dispatch => ({
//   fetchItemData: (payload) => dispatch(fetchItemData(payload))
// });

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
