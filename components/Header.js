import { Component } from 'react';
import { Layout, Menu, Affix } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
// import getConfig from 'next/config';

const { Header } = Layout;

// Only holds serverRuntimeConfig and publicRuntimeConfig from next.config.js nothing else.
// const { publicRuntimeConfig: { staticFolder } } = getConfig();

class HeaderApp extends Component {
  static propTypes = {
    title: PropTypes.string
  }
  static defaultProps = {
    title: ''
  }
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = { title };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.title !== prevState.title) {
      return {
        title: nextProps.title
      };
    }
    return null;
  }

  render() {
    const { title } = this.state;
    
    return (
      <>
        <Header style={{ color: '#fff' }}>
          Main Head
        </Header>
        <Affix >
          <Header>
            <div className='logo' />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[title]}
              style={{ lineHeight: '64px' }}
            >

              <Menu.Item key="Home">
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </Menu.Item>

              <Menu.Item key="Blog">
                <Link href='/blog'>
                  <a>Blog</a>
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Affix>
      </>
    );
  }
}

export default HeaderApp;
