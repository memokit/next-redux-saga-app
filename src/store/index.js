import { useStaticRendering } from 'mobx-react';

import DataStore from './DataStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { dataStore: [] }) {
    if (isServer) {
        return {
            dataStore: new DataStore(initialData.dataStore),
        };
    }
    if (store === null) {
        store = {
            dataStore: new DataStore(initialData.dataStore),
        };
    }

    return store;
}