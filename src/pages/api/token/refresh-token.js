import fetch from 'isomorphic-unfetch';
import { DevProxy, ProdProxy} from '../../../constants/ProxyConfig';
import api from '../../../constants/ApiUrl';
export default async (req, res) =>  {
  

  // const handler = (req, res) => {
  //     res.cookie('Next.js', 'api-middleware!');
  //     res.end('Hello Next.js middleware!');
  // };
  // res.cookie = cookie(res,"xxx", "12334");

  console.log(req.body);
  
  const respond = await getRefreshToken(req);
  const result = await respond.json();
  res.status(200).json(result);

  
};

const getRefreshToken = (req) => {
  try {
      const isDev = process.env.NODE_ENV !== 'production';
      const host = isDev?DevProxy.host:ProdProxy.host;
      // const body = {
      //     "grantType": "GUEST_WEB_SITE"
      // };
      return fetch(host+api.refreshToken, {
          method: "POST",
          headers: {
              "Accept": "application/json",
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
          },
          body: req.body,//JSON.stringify(body)
      });
  } catch (error) {
      console.log(error);
      
  }
};