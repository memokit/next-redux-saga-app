import HomeMobile from '../../components/Mobile/Home';
import { getResultData } from '../../utils';
import { initialToken } from '../../utils/tokenUtil';


HomeMobile.getInitialProps = async (props) => {

  const { store, req } = props;

  const token = await initialToken(req);
  
  await store.contentStore.addToken(token.accessToken);
  const response = await store.contentStore.getAll();
  const result = await getResultData(response);

  return {
    result
  };
};


export default HomeMobile;