import { action, observable } from 'mobx';

class DataStore {
  @observable list = []

   constructor (initialData = {}) {
     this.list = initialData.list;
   }

  

  // @action loadMoreList = moreList => {
  //   this.list = this.list.concat(moreList)
  // }

  @action
  addList(list) {
      this.list = list;
  }
}

//DataStore.initStore = list => new DataStore(list)

export default DataStore;
// export const initStore = list => new DataStore(list)
