import { Component } from 'react'
import { Provider } from 'mobx-react'
import MainList from './MainList'
import { getPageTitle, getInitList } from '../utils'
import { inject, observer } from 'mobx-react'

export default class HomeListpage extends Component {
  // static async getInitialProps () {
  //   const title = 'Home'//getPageTitle(pathname)
  //   const path = title === '首页' ? 'all' : title
  //   const apiUrl = `https://gank.io/api/data/${encodeURIComponent(path)}/20`

  //   const initList = await getInitList(apiUrl)

  //   return {
  //     title,
  //     apiUrl,
  //     initList
  //   }
  // }

  render () {
    const { props } = this

    return (
      <>
        <MainList title={props.title} apiUrl={props.apiUrl}></MainList>
      </>
    )
  }
}
