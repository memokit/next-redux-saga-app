
import { Row, Col } from 'antd';
import ImageCard from '../ImageCard';

function Home(props) {
    const { result } = props;

    const list = result.result;

    const listItems = list.map((item, i) =>
        <div key={i}>
            <span>
                {item.title}
            </span>
            <span>{item.createdAt}</span>
        </div>
    );

    return (
        <>
            <div>
                <Row gutter={30}>
                    <Col className="gutter-row" xs={24} sm={24} md={24} lg={16} xl={16} >
                        <div className="gutter-box">
                            <ImageCard src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                            <Row>
                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <ImageCard src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                                </Col>
                                <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <ImageCard src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} sm={24} md={8} lg={8} xl={8} >
                        <div className="gutter-box">
                            <ImageCard src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        </div>
                        <div className="gutter-box">
                            <ImageCard src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        </div>
                        <div className="gutter-box">
                            <ImageCard src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                        </div>
                    </Col>
                </Row>

            </div>
            <h1>Hello Next.js</h1>
            {listItems}
            {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
        </>
    );
}
export default Home;