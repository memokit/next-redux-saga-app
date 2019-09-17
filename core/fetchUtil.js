import fetch from 'isomorphic-unfetch';

const fetchUtil = async (url, opt) => {
    let headers = new Headers();

    headers.append('Accept', 'application/json');
    
    let option = {
        ...opt,
        ...headers
    };

    let data = {};
    data = await fetch(url, option).then(res => res);
    return data;
};

export default fetchUtil;