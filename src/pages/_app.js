import App from 'next/app';
import { Provider } from 'mobx-react';
import Layout from '../components/Layout';
import initializeStore from '../store';
import '../../public/static/less/self-styles.less';
// import cookies from 'nookies';
// import { getResultData } from '../utils';
// import { initialToken } from '../utils/tokenUtil';

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

// const setCookie = (ctx) => {
//   cookies.set(ctx, 'x_rf_tk', "999999", {
//       // maxAge: refreshDiffDay * 24 * 60 * 60,
//       path: '/',
//   });

//   cookies.set(ctx, 'x_ac_tk', "888", {
//     // maxAge: refreshDiffDay * 24 * 60 * 60,
//     path: '/',
//   });
// };

export default MyApp;
