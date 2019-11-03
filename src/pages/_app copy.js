import App from 'next/app';
import { Provider } from 'mobx-react';
import Layout from '../components/Layout';
import initializeStore from '../store';
import '../../public/static/less/self-styles.less';

const Index = ({ Component, pageProps, router, store }) => (


    <Provider store={store}>
      <Layout title={'Memokit'}>
        <Component {...pageProps} router={router} />
      </Layout>
    </Provider>
);

Index.getInitialProps = async (appContext) => {
  const mobxStore = initializeStore(store);
  appContext.ctx.store = mobxStore;
  const appProps = await App.getInitialProps(appContext);

  const isServer = typeof window === 'undefined';
  store = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);

  return {
    ...appProps,
    initialMobxState: mobxStore
  };
};

class MyApp extends App {
  static async getInitialProps(appContext) {

    const mobxStore = initializeStore(this.store);
    appContext.ctx.store = mobxStore;
    const appProps = await App.getInitialProps(appContext);

    //initialToken(appContext.ctx, mobxStore.tokenStore);
    // const refreshTokenObj = await mobxStore.tokenStore.getRefreshToken();
    // const refreshTokenJson = await getResultData(refreshTokenObj);


    // setCookie(appContext.ctx);



    return {
      ...appProps,
      initialMobxState: mobxStore
    };
  }

  constructor(props) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.store = isServer ? props.initialMobxState : initializeStore(props.initialMobxState);
  }



  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Provider store={this.store}>
        <Layout title={'Memokit'}>
          <Component {...pageProps} router={router} />
        </Layout>
      </Provider>
    );
  }
}

export default MyApp;
