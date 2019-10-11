import App, { Container } from 'next/app';
import { Provider } from 'mobx-react'
import Layout from '../components/Layout';
import initializeStore from '../store';

class MyApp extends App {
  static async getInitialProps(appContext) {
    const mobxStore = initializeStore();
    appContext.ctx.store = mobxStore;
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
      initialMobxState: mobxStore,
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.store = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }

  render () {
    const { Component, pageProps, store, router } = this.props;
    return (
      <Provider store={this.store}>
        <Layout title={'Test'}>
          <Component {...pageProps} router={router} />
        </Layout>
      </Provider>
    );
  }
}

export default MyApp;
