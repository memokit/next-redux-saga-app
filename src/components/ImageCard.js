
import { Card } from 'antd';

function ImageCard(props) {
    const { src } = props;
    return (
        <Card>
            <img
                alt="example"
                src={src}
            />
        </Card>
    );
}
export default ImageCard;