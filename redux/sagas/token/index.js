import token from "./token";
import refreshToken from "./refreshToken";
import accessToken from "./accessToken";

const tokenSagas = [
    ...token,
    ...refreshToken,
    ...accessToken
];
  
export default tokenSagas;