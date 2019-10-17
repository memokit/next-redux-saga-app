
import { HostConfig} from '../constants/ProxyConfig';


const category = [{
  title: 'Home',
  path: '/'
}, {
  title: '前端',
  path: '/fe'
}, {
  title: 'Android',
  path: '/android'
}, {
  title: 'iOS',
  path: '/ios'
}, {
  title: 'App',
  path: '/app'
}, {
  title: '拓展资源',
  path: '/expand'
}, {
  title: '休息视频',
  path: '/videos'
}, {
  title: '瞎推荐',
  path: '/blind'
}, {
  title: '福利',
  path: '/welfare'
}];

export const getResultData = async (res) => {

  const json = await res.json();

  console.log(res.status);
  if(res.status === 200){
    return json.result;
  } 
  
  return {};
};

export const getInitList = async (apiUrl) => {
  const res = await fetch(`${apiUrl}/1`);
  const json = await res.json();

  return json.results;
};

export const getPageTitle = (pathname) => {
  return category.find(({ path }) => path === pathname).title;
};

export const getPagePath = (name) => {
  return category.find(({ title }) => title === name).path;
};

export const getHostPath = (url) => {
  const hostPath = HostConfig.host;
  let port = HostConfig.port;

  return `${hostPath}:${port}${url}`;
};
