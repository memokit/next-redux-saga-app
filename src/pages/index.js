import Home from '../components/Home';
import { getPageTitle } from '../utils';
import { initialToken } from '../utils/tokenUtil';
import { getResultData } from '../utils';


Home.getInitialProps = async (props) => {

  const { store, pathname, req } = props;

  const title = getPageTitle(pathname);


  const token = await initialToken(req);
  
  await store.contentStore.addToken(token.accessToken);
  const response = await store.contentStore.getAll();
  const result = await getResultData(response);

  return {
    title,
    result
  };
};


export default Home;