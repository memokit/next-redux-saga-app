import PropTypes from 'prop-types';
import { Layout } from 'antd';
const { Content, Footer } = Layout;
import Header from './Header';

const LayoutApp = ({ title, children }) => (
    <Layout>
        <Header title={title} />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
            
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
);


LayoutApp.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
};

LayoutApp.defaultProps = {
    title: '',
    children: null
};

export default LayoutApp;