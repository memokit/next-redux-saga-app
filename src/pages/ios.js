import ListPage from '../components/Listpage'
import { initStore } from '../store/DataStore'

export default class IosPage extends ListPage {
  constructor (props) {
    super(props)

    this.store = initStore(props.initList)
  }
}
