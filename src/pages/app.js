import ListPage from '../components/Listpage'
import { initStore } from '../store/DataStore'

export default class AppPage extends ListPage {
  constructor (props) {
    super(props)

    this.store = initStore(props.initList)
  }
}