import BlogItem from './../../containers/blog/item';
import { fetchItemData } from '../../redux/actions/blog';

BlogItem.getInitialProps = async (props) => {
    const { store, isServer, resultData } = props.ctx;
    let data = {
        id: 1
    };

    store.dispatch(fetchItemData(data));
    return { isServer, resultData };
};


export default BlogItem;