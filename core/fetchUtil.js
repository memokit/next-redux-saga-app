import fetch from 'isomorphic-unfetch';

const fetchUtil = async (url, opt) => {
    let headers = new Headers();
    console.log("+++++++++ My Fetch ++++++++++");
    
    // headers.append('Accept', 'application/json');
    headers.append('XXXYY', 'Hello');
    console.log(opt);
    
    // let option = {
    //     method: 'GET',
    //     headers: {
    //         'Authorization': '123456789',
    //         'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
    //         'Content-Type': 'application/json'
    //     }
    // };

    let data = {};
    data = fetch(url, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': '123456789',
            'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
            'Content-Type': 'application/json'
        }
    }).then(res => res);
    console.log("+++++++++ End My Fetch ++++++++++");
    return data;
};

export default fetchUtil;