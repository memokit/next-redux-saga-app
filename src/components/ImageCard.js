
import { Card } from 'antd';
const { Meta } = Card;

function ImageCard(props) {
    const { src, title } = props;
    return (
        <Card
            hoverable
            // style={{ width: 240 }}
            cover={<img alt="example" src={src} />}
        >
            <Meta title={title} />
        </Card>
    );
}
export default ImageCard;