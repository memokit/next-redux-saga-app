
import { HostConfig } from '../constants/ProxyConfig';
// import _ from 'lodash';


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

  if (res.status === 200) {
    return json;
  }

  return {
    result: {},
    status: res.status,
    message: res.statusText
  };
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
  const isServer = typeof window === 'undefined';

  let fullHost;
  if (!isServer) {    
    fullHost = `${window.location.protocol}//${window.location.host}`;
  } else {
    const hostPath = HostConfig.host;
    const port = parseInt(process.env.PORT, 10);
    // const port = HostConfig.port;
    fullHost = `${hostPath}:${port}`;

  }
  console.log(`${fullHost}${url}`);
  

  return `${fullHost}${url}`;
};
