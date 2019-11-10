import fetch from 'isomorphic-unfetch';
import jwt from 'jsonwebtoken';
import { externalApi } from '../../../constants/ApiUrl';
import Cookies from 'cookies';
export default async (req, res) =>  {

  const cookies = new Cookies(req, res);
  const response = await getAccessToken(req);
  const result = await response.json();
  const accessToken = result.result.accessToken;

  const decodeAccessToken = jwt.decode(accessToken, { complete: true });
  const accessPayload = decodeAccessToken.payload;
  const accessExpiresDate = new Date(accessPayload.exp * 1000);

  const optionCookie = {
    httpOnly: false,
    expires: accessExpiresDate
  };

  cookies.set('x_ac_tk', accessToken, optionCookie);
  res.status(200).json(result);
};

const getAccessToken = (req) => {
  try {

      return fetch(externalApi.accessToken, {
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