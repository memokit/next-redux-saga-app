import fetch from 'isomorphic-unfetch';
import { hostPath } from '../core/util';
import api from '../constants/ApiUrl';

const headerUtil = async () => {

    const refToken = await refreshToken();

    console.log("!!!!!!!!!!!!!!!!!!!!! refreshToken !!!!!!!!!!!!!!!!!!!!!");
    
    console.log(refToken);
    console.log("!!!!!!!!!!!!!!!!!!!!! End refreshToken !!!!!!!!!!!!!!!!!!!!!");

    return {
        method: "GET",
        mode: 'cors',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImllbTVQQXlWVXUxQ19uc1hfamJvRFZWZTA4ND0iLCJ0eXBlIjoyLCJncmFudFR5cGUiOjQsInJvbGVUeXBlIjoyLCJleHAiOjE1NjkxNDE3NjIsImlhdCI6MTU2OTE0MTQ2Mn0.bXN2K6CefonKPnNP9uqUlRNjfRS7eGmL0xm2ZuFGlOveQZzp4tRfoPNMigCkGNk8qbE5zTqbtkuyzbZ74TLHnQXTZpXlAeYQhHj8NkHW0GkPXBel5pj0pAl28A0hT7KIgQdZCHQkt-R2cgiz6fBNu_RwlFUqguupYcZTd43eiu0'
        },
        body: null,
    };
};


const refreshToken = () => {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    
    const body = {
        "grantType": "GUEST_WEB_SITE"
    };

    const res = fetch(hostPath(api.refreshToken), {
        method: "POST",
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(body)
    });

    return res.json();
};

export default headerUtil;