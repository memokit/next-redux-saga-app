import fetch from 'isomorphic-unfetch';
import { hostPath } from '../core/util';
import api from '../constants/ApiUrl';

const headerUtil = async () => {
    try {
        console.log("!!!!!!!!!!!!!!!!!!!!! refreshToken !!!!!!!!!!!!!!!!!!!!!");
        return refreshToken().then( r => r.json() )
        .then( data => {
            console.log(data.result.accessToken);
            console.log("!!!!!!!!!!!!!!!!!!!!! End refreshToken !!!!!!!!!!!!!!!!!!!!!");
            return  {
                method: "GET",
                mode: 'cors',
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `bearer ${data.result.accessToken}`
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

export default headerUtil;