import Home from '../components/Home';
import { getPageTitle, getHostPath, getResultData } from '../utils';

import fetch from 'isomorphic-unfetch';


Home.getInitialProps = async (props) => {
   
  const { store, pathname } = props;

  const title = getPageTitle(pathname);
  // const path = title === '首页' ? 'all' : title;
  const apiUrl = '/api/token/refresh-token';//`https://gank.io/api/data/${encodeURIComponent(path)}/20`;

  const initList = [];//await getInitList(apiUrl);
  const body = {
    mydata: "hello"
  };
  const response = await fetch(getHostPath(apiUrl), {
    method: "POST",
    
    body: JSON.stringify(body)
});
  const result = await getResultData(response);
  console.log(result);
  

  store.dataStore.addList(initList);
  return {
    title,
    apiUrl,
    initList
  };
};


export default Home;