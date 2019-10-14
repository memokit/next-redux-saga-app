import Home from '../components/Home';
import { getPageTitle } from '../utils';


Home.getInitialProps = async (props) => {
   
  const { store, pathname } = props;

  const title = getPageTitle(pathname);
  const path = title === '首页' ? 'all' : title;
  const apiUrl = `https://gank.io/api/data/${encodeURIComponent(path)}/20`;

  const initList = [];//await getInitList(apiUrl);

  store.dataStore.addList(initList);
  return {
    title,
    apiUrl,
    initList
  };
};


export default Home;