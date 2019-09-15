import refreshToken from "./refreshToken";
import accessToken from "./accessToken";

const tokenSagas = [
    ...refreshToken,
    ...accessToken
];
  
export default tokenSagas;