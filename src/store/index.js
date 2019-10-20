import { useStaticRendering } from 'mobx-react';

import TokenStore from './TokenStore';
import DataStore from './DataStore';
import ContentStore from './ContentStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

const data = { 
    tokenStore: {},
    contentStore: {},
    dataStore: [] 
};

export default function initializeStore(initialData = data) {

    if (isServer) {
        
        return {
            tokenStore: new TokenStore(initialData.tokenStore),
            contentStore: new ContentStore(initialData.contentStore),
            dataStore: new DataStore(initialData.dataStore),
        };
    }
    if (store === null) {
        store = {
            tokenStore: new TokenStore(initialData.tokenStore),
            contentStore: new ContentStore(initialData.contentStore),
            dataStore: new DataStore(initialData.dataStore),
        };
    }

    return store;
}