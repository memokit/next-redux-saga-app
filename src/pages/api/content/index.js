import fetch from 'isomorphic-unfetch';
import { externalApi } from '../../../constants/ApiUrl';

/**
 * Get All Content
 */
export default async (req, res) => {

  const response = await getData(req);
  const result = await response.json();
  res.status(200).json(result);
};

const getData = (req) => {
  try {
    
    return fetch(externalApi.getAllContent, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': req.headers.authorization
      },
      body: req.body,
    });
  } catch (error) {
    console.log(error);
  }
};