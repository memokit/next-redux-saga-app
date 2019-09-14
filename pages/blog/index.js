import BlogItem from './../../containers/blog/item';
import { fetchItemData } from '../../redux/actions/blog';

BlogItem.getInitialProps = async (props) => {
    const { store, isServer, result } = props.ctx;
    let data = {
        id: 1
    };

    console.log("Page getInitialProps");
    
    store.dispatch(fetchItemData(data));
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(result);
    
    return { isServer, result };
};


export default BlogItem;