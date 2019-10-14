import { useStaticRendering } from 'mobx-react';

import TokenStore from './TokenStore';
import DataStore from './DataStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { tokenStore: {}, dataStore: [] }) {

    if (isServer) {
        
        return {
            tokenStore: new TokenStore(initialData.tokenStore),
            dataStore: new DataStore(initialData.dataStore),
        };
    }
    if (store === null) {
        store = {
            tokenStore: new TokenStore(initialData.tokenStore),
            dataStore: new DataStore(initialData.dataStore),
        };
    }

    return store;
}