import {  observable } from 'mobx';
import fetch from 'isomorphic-unfetch';
import { externalApi } from '../constants/ApiUrl';
// import { DevProxy, ProdProxy } from '../constants/ProxyConfig';

class TokenStore {
    @observable refreshToken = null;
    @observable accessToken = null;

    constructor(initialData = {}) {
        this.refreshToken = initialData.refreshToken;
        this.accessToken = initialData.accessToken;
    }



    getRefreshToken() {
        try {
            const body = {
                "grantType": "GUEST_WEB_SITE"
            };
            return fetch(externalApi.refreshToken, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.log(error);
            
        }
    }

    // getAccessToken() {
    //     console.log("getAccessToken");
    //     const isDev = process.env.NODE_ENV !== 'production';
    //     const host = isDev?DevProxy.host:ProdProxy.host;
    //     const body = {
    //         "grantType": "ACCESS_TOKEN",
    //         "uid": "",
    //         "refreshToken": ""
    //     };
    //     return fetch(host+api.accessToken, {
    //         method: "POST",
    //         headers: {
    //             "Accept": "application/json",
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //         },
    //         body: JSON.stringify(body)
    //     });
    // }
   
}

export default TokenStore;
