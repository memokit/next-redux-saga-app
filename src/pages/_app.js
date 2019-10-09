import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from '../redux/store';
import Layout from '../components/Layout';
import { RouterTitle } from '../constants/ConstTypes';
import '../assets/self-styles.less';

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps, store, router } = this.props;
    return (
      <Provider store={store}>
        <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <title>Next-Antd-Scaffold</title>
          <link rel="icon" type="image/x-icon" href="favicon.ico" />
        </Head>
        <Layout title={RouterTitle[router.pathname]}>
          <Component {...pageProps} router={router} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
