// import { getResultData } from '../utils';
import cookies from 'nookies';
// import jwt from 'jsonwebtoken';
// import _ from 'lodash';

export const initialToken = async (ctx, store) => {
    // const cookie = cookies.get(ctx);
    setToken(ctx, store);
    // if (_.isNil(cookie) || _.isNil(cookie.x_rf_tk)) {
    //     //setToken(ctx, store);
    // } else {
    //     const token = cookie.x_rf_tk;

    //     const decodedRefreshToken = jwt.decode(token, { complete: true });
    //     const payload = decodedRefreshToken.payload;

    //     if (payload.exp < new Date().getTime()/1000) {
    //         //setToken(ctx, store);
    //     }
    // }

};

const setToken = async (ctx, store) => {
    const refreshTokenObj = await store.getRefreshToken();
    // const refreshTokenJson = await getResultData(refreshTokenObj);
    
    console.log(refreshTokenObj);
    
    setTimeout(function(){ setCookie(ctx);}, 3000);
    
    // const refrToken = refreshTokenJson.refreshToken;
    // const acceToken = refreshTokenJson.accessToken;
    

    // const decodeRefreshToken = jwt.decode(refrToken, { complete: true });
    // const refreshPayload = decodeRefreshToken.payload;
    
    // const decodeAccessToken = jwt.decode(acceToken, { complete: true });
    // const accessPayload = decodeAccessToken.payload;

    // const currentDate = new Date();
    // const refreshExpiresDate = new Date(refreshPayload.exp * 1000);
    // const refreshDiffDay = Math.round((refreshExpiresDate - currentDate) / (1000 * 60 * 60 * 24));
    // const accessExpiresDate = new Date(accessPayload.exp * 1000);
    // const accessDiffDay = Math.round((accessExpiresDate - currentDate) / (1000 * 60 * 60 * 24));

// console.log(refreshDiffDay);
// console.log(accessDiffDay);
    
// console.log(accessDiffDay);

    // cookies.set(ctx, 'x_ac_tk', acceToken, {
    //     path: '/',
    // });
};

// const setAccessToken = async (ctx, store, refrToken) => {
//     const refreshTokenObj = await store.getAccessToken();
//     const refreshTokenJson = await getResultData(refreshTokenObj);
//     const refrToken = refreshTokenJson.refreshToken;

//     const decodedRefreshToken = jwt.decode(refrToken, { complete: true });
//     const payload = decodedRefreshToken.payload;

//     const currentDate = new Date();
//     const expiresDate = new Date(payload.exp * 1000);
//     var diffDay = Math.round((expiresDate - currentDate) / (1000 * 60 * 60 * 24));

//     cookies.set(ctx, 'x_rf_tk', refrToken, {
//       maxAge: diffDay * 24 * 60 * 60,
//       path: '/',
//     });
// };

const setCookie = (ctx) => {
    try {
        cookies.set(ctx, 'x_rf_tk', "999999", {
            // maxAge: refreshDiffDay * 24 * 60 * 60,
            path: '/',
        });
    } catch (err) {
        console.log(err);
        
    }
};