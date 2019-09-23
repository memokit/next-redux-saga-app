import getConfig from 'next/config';
import _ from 'lodash';
import { DevProxy, ProdProxy } from '../constants/ProxyConfig';
const { publicRuntimeConfig: { isDev } } = getConfig();

// transform the http query & params
export const filterObject = (o, filter) => {
  const r = {};
  Object.keys(o).forEach(k => {
    if (filter(o[k], k)) {
      r[k] = o[k];
    }
  });
  return r;
};

export const hostPath = (url) => {
  const isServer = typeof window === 'undefined';
  const hostPath = isDev ? DevProxy.host : ProdProxy.host;
  let port = "";
  if (isServer) {

    let data;
    if(isDev){
      data = _.find(DevProxy.systems, function (o) { return url.search(o.pathUrl) >= 0; });
    } else {
      data = _.find(ProdProxy.systems, function (o) { return url.search(o.pathUrl) >= 0; });
    }

    port = isDev ? `:${data.port}` : "";
    return `${hostPath}${port}${url}`;

  }

  return url;
};