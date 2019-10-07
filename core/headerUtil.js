import fetch from 'isomorphic-unfetch';
import jwt from 'jsonwebtoken';
import { hostPath } from '../core/util';
import api from '../constants/ApiUrl';

const headerUtil = async () => {
    try {
        console.log("!!!!!!!!!!!!!!!!!!!!! refreshToken !!!!!!!!!!!!!!!!!!!!!");
        return refreshToken().then( r => r.json() )
        .then( data => {
            console.log(data.result.accessToken);
            console.log("!!!!!!!!!!!!!!!!!!!!! End refreshToken !!!!!!!!!!!!!!!!!!!!!");
            const refrToken = data.result.refreshToken;
            const acceToken = data.result.accessToken;
            const decodedRefreshToken = jwt.decode(refrToken, {complete: true});
            const payload = decodedRefreshToken.payload;
            console.log(decodedRefreshToken);
            
            if (payload.exp >= new Date().getTime()/1000) {
                console.log("Not EXPIRED");
                accessToken(decodedRefreshToken.payload.id, refrToken).then( r => r.json() )
                .then( data => {
                   console.log(data);
                    
                });
            }

            return  {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `bearer ${acceToken}`
                },
                body: null,
            };
        });
    } catch (err) {
        console.log(err);
        
    }
};

const refreshToken = () => {
    try {
        const body = {
            "grantType": "GUEST_WEB_SITE"
        };

        return fetch(hostPath(api.refreshToken), {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)
        });
    } catch (err) {
        console.log("error refreshToken");
        console.log(err);
    }


};

const accessToken = (uid, refreshToken) => {
    try {
        const body = {
            "grantType": "ACCESS_TOKEN",
            "uid": uid,
            "refreshToken": refreshToken
        };

        return fetch(hostPath(api.accessToken), {
            method: "POST",
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(body)
        });
    } catch (err) {
        console.log("error accessToken");
        console.log(err);
    }


};

export default headerUtil;