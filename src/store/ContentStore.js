import { observable, action } from 'mobx';
import fetch from 'isomorphic-unfetch';
import { internalApi } from '../constants/ApiUrl';
import { getHostPath } from '../utils';
// import { DevProxy, ProdProxy } from '../constants/ProxyConfig';

class ContentStore {
    @observable token = null;

    constructor(initialData = {}) {
        this.token = initialData.token;
    }

    @action
    addToken(token) {
        this.token = token;
    }

    getAll() {
        try {
            const body = {
                itemPerPage: 6
            };
            return fetch(getHostPath(internalApi.getAllContent), {
                method: "POST",
                headers: {
                    'Authorization': `bearer ${this.token}`
                },
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.log(error);

        }
    }
}

export default ContentStore;
