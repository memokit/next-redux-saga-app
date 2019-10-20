import fetch from 'isomorphic-unfetch';
import jwt from 'jsonwebtoken';
import { externalApi } from '../../../constants/ApiUrl';
import Cookies from 'cookies';

export default async (req, res) => {
 
  const cookies = new Cookies(req, res);
 
  const respond = await getRefreshToken(req);
  const result = await respond.json();
  const refreshToken = result.result.refreshToken;
  const accessToken = result.result.accessToken;
  const uid = result.result.uid;

  const decodeRefreshToken = jwt.decode(refreshToken, { complete: true });
  const refreshPayload = decodeRefreshToken.payload;

  const decodeAccessToken = jwt.decode(accessToken, { complete: true });
  const accessPayload = decodeAccessToken.payload;

  const refreshExpiresDate = new Date(refreshPayload.exp * 1000);
  const accessExpiresDate = new Date(accessPayload.exp * 1000);

  const optionRefreshCookie = {
    httpOnly: false,
    expires: refreshExpiresDate
  };

  const optionAccessCookie = {
    httpOnly: false,
    expires: accessExpiresDate
  };

  cookies.set('x_rf_tk', refreshToken, optionRefreshCookie);
  cookies.set('x_ac_tk', accessToken, optionAccessCookie);
  cookies.set('x_uid', uid, optionRefreshCookie);
  res.status(200).json(result);
};

const getRefreshToken = (req) => {
  try {
    return fetch(externalApi.refreshToken, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: req.body,
    });
  } catch (error) {
    console.log(error);

  }
};


// const cookie = (res, name, value, options = {}) => {

//   const stringValue =
//     typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

//   if ('maxAge' in options) {
//     options.expires = new Date(Date.now() + options.maxAge);
//     options.maxAge /= 1000;

//   }
//   options.sameSite = true;
//   options.path = "/";

//   res.setHeader('Set-Cookie', serialize(name, String(stringValue), options));

// };