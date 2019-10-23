import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
// import Link from 'next/link';
import {
  Layout, Menu, Button, Icon, BackTop
} from 'antd';
import ActiveLink from './../ActiveLink';
import 'isomorphic-fetch';


Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const { Header, Content, Footer } = Layout;

const headerStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  boxShadow: '0 3px 3px rgba(0,0,0,.29)',
  zIndex: 10
};
const headerMenuStyle = {
  lineHeight: '64px',
  float: 'left'
};
const contentStyle = {
  maxWidth: 1140,
  width: '100%',
  padding: '80px 50px 64px',
  margin: '0 auto',
  minHeight: `calc(100vh - 69px)`
};

export default ({ children, title = 'MemoKit' }) => (
  <Layout className="layout">
    <Head>
      <title>{title} - Gank</title>
      <meta charSet='utf-8' />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
      />
      <link href="/static/css/nprogress.css" rel="stylesheet" />
      <link href="/static/logo.png" rel="icon" type="image/x-icon" />
      <link href="/static/logo.png" rel="apple-touch-icon" />
      <link href='/static/manifest.json' rel='manifest' />
    </Head>

    <Header style={headerStyle}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        style={headerMenuStyle}
      >
        <ActiveLink href='/'>Home</ActiveLink>
        <ActiveLink href='/blog'>Blog</ActiveLink>
      </Menu>
      <div className="icons">
        {/* <Link href='/upload'>
          <Button type="primary" shape="circle" style={{ marginRight: 12 }} icon="upload" />
        </Link>
        <Link href='/search'>
          <Button type="primary" shape="circle" style={{ marginRight: 12 }} icon="search" />
        </Link> */}
        <a className="github-btn" href="https://github.com/memokit" target="_blank">
          <Button shape="circle" icon="github" />
        </a>
      </div>
    </Header>

    <Content style={contentStyle}>
      {children}
    </Content>

    <Footer style={{ textAlign: 'center' }}>
      MemoKit ©2019 Paword by Next
      <a href="https://github.com/memokit" style={{ marginLeft: 6 }} target="_blank">
        <Icon type="github" />
      </a>
    </Footer>

    <BackTop />

    <style jsx>{`
      .logo {
        width: 30px;
        height: 30px;
        background-image: url(/static/logo.png);
        background-size: cover;
        border-radius: 6px;
        margin: 16px 24px 16px 0;
        float: left;
      }

      .icons {
        float: right;
      }
    `}</style>
  </Layout>
);
