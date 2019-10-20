import fetch from 'isomorphic-unfetch';
import { getResultData, getHostPath } from '../utils';
import { internalApi } from '../constants/ApiUrl';
import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';
// import Cookies from 'cookies';

// import cookies from 'nookies';
// import jwt from 'jsonwebtoken';
import _ from 'lodash';

export const initialToken = async (req) => {

    let cookies;
    if (_.isNil(req)) {
        cookies = new Cookies();
    } else {
        cookies = new Cookies(req.headers.cookie);
    }

    let refreshToken = await cookies.get('x_rf_tk');
    let accessToken = await cookies.get('x_ac_tk');
    let uid = await cookies.get('x_uid');



    if (_.isNil(refreshToken) || _.isNil(uid)) {
        const res = await getRefreshToken();
        const refreshResult = await getResultData(res);

        refreshToken = refreshResult.result.refreshToken;
        accessToken = refreshResult.result.accessToken;
        uid = refreshResult.result.uid;
    } else if (_.isNil(accessToken)) {
        const res = await getAccessToken(uid, refreshToken);
        const result = await getResultData(res);

        if (result.status === 401) {
            const refreshRes = await getRefreshToken();
            const refreshResult = await getResultData(refreshRes);

            refreshToken = refreshResult.result.refreshToken;
            accessToken = refreshResult.result.accessToken;
            uid = refreshResult.result.uid;
        } else {
            accessToken = result.result.accessToken;
            uid = result.result.uid;
        }
    } else {
        const decodeRefreshToken = jwt.decode(refreshToken, { complete: true });
        const decodeAccessToken = jwt.decode(accessToken, { complete: true });
        const payloadRefreshToken = decodeRefreshToken.payload;
        const payloadAccessToken = decodeAccessToken.payload;

        if (payloadRefreshToken.exp < new Date().getTime() / 1000) {
            const res = await getRefreshToken();
            const refreshResult = await getResultData(res);

            refreshToken = refreshResult.result.refreshToken;
            accessToken = refreshResult.result.accessToken;
            uid = refreshResult.result.uid;
        } else if (payloadAccessToken.exp < new Date().getTime() / 1000) {
            const res = await getAccessToken(uid, refreshToken);
            const result = await getResultData(res);

            if (result.status === 401) {
                const refreshRes = await getRefreshToken();
                const refreshResult = await getResultData(refreshRes);

                refreshToken = refreshResult.result.refreshToken;
                accessToken = refreshResult.result.accessToken;
                uid = refreshResult.result.uid;
            } else {
                accessToken = result.result.accessToken;
                uid = result.result.uid;
            }
        }
    }

    return {
        accessToken: accessToken,
        uid: uid
    };
};

const getRefreshToken = async () => {
    const body = {
        grantType: "GUEST_WEB_SITE"
    };

    return await fetch(getHostPath(internalApi.refreshToken), {
        method: "POST",
        body: JSON.stringify(body)
    });
};

const getAccessToken = async (uid, refreshToken) => {
    const body = {
        "grantType": "ACCESS_TOKEN",
        "uid": uid,
        "refreshToken": refreshToken
    };

    return await fetch(getHostPath(internalApi.accessToken), {
        method: "POST",
        body: JSON.stringify(body)
    });
};