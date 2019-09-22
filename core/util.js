import getConfig from 'next/config';
const { publicRuntimeConfig: { host, isDev } } = getConfig();

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
  console.log("======== isServer ==========");
      console.log(isServer);
      console.log(host);
      
      console.log("======== End isServer ==========");
  const hostPath = isDev? 'http://localhost' : host;
  let port = "";
  if(isServer){
    if(url.search("/api/content") >= 0){
      port = isDev? ":3001": "";
      return `${hostPath}${port}${url}`;
    }
  } else {
    return url;
  }
};