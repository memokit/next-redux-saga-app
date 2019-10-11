import HomeListpage from '../components/HomeListpage'
import DataStore from '../store/DataStore'
import { getPageTitle, getInitList } from '../utils'

// export default class HomePage extends HomeListpage {
//   constructor (props) {
//     super(props)


//     console.log(props);

//     this.store = initStore(props.initList)
//   }
// }


HomeListpage.getInitialProps = async (props) => {
  const { store, pathname } = props;
  //store = initStore(props.initList)

  // store = DataStore.initStore(mobxStore.dataStore)
  
   
  

  const title = getPageTitle(pathname)
  const path = title === '首页' ? 'all' : title
  const apiUrl = `https://gank.io/api/data/${encodeURIComponent(path)}/20`

  const initList = await getInitList(apiUrl)
  console.log("*********************************");
  console.log(DataStore.initStore(initList));
  console.log("*********************************");
  // props.store.DataStore.list = props
  return {
    title,
    apiUrl,
    initList
  }
};


export default HomeListpage;