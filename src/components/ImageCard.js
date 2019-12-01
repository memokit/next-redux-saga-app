
import Link from 'next/link';
import { Row, Col } from 'antd';

function ImageCard(props) {
    const { src, title } = props;

    const imageCard = {
        margin: 0,
        padding: 0,
        background: "linear-gradient(0deg, rgba(0, 0, 0, 0.46) 30%, rgba(0, 0, 0, 0.87) 100%)",
    };

    const imageStyle = {
        width: "100%",
    };

    const rootOverlay = {
        position: "absolute",
        height: "100%",
        width: "100%",
    };

    const imageOverlay = {
        background: "linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0) 100%)",
        height: "inherit",
        width: "100%",
    };

    const imageTitle = {
        color: "white",
        height: "inherit",
        display: "inline-block",
        verticalAlign: "bottom"
    };

    const textTitle = {
        fontFamily: "'Prompt', sans-serif",
        fontSize: "calc(0.8vw + 1vh + 0.7vmin)",
        textAlign: "center",
        width: "100%",
        position: "absolute",
        bottom: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    };

    return (
        <Row >
            <Col span={24}>
                <div style={imageCard}>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={24}>
                            <Link href="#" >
                                <a>
                                    <img src={src} style={imageStyle} />
                                </a>
                            </Link>
                        </Col>
                        <div style={rootOverlay}>
                            <div style={imageOverlay}>
                                <div style={imageTitle}>
                                    <p className="p-l-10 p-r-10" style={textTitle}>
                                        {title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </Col>
        </Row>
    );

}
export default ImageCard;