import { action, observable } from 'mobx'

class DataStore {
  @observable list = []

  constructor (list) {
    this.list = list
  }

  

  @action loadMoreList = moreList => {
    this.list = this.list.concat(moreList)
  }
}

DataStore.initStore = list => new DataStore(list)

export default DataStore;
// export const initStore = list => new DataStore(list)
