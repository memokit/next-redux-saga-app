
import { Row, Col } from 'antd';
import ImageCard from '../ImageCard';
import { internalApi } from '../../constants/ApiUrl';
// import { useState, useEffect } from 'react';
// import ItemsCarousel from 'react-items-carousel';

import Slider from "react-slick";

function Home(props) {
    const { result } = props;

    const list = result.result;

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    // const [activeItemIndex, setActiveItemIndex] = useState(0);
    // const noOfItems = list.length;
    // const noOfCards = 3;
    // const chevronWidth = 0;
    // const autoPlayDelay = 5000;
    // let interval;
    // const tick = () => setActiveItemIndex((activeItemIndex + 1) % (noOfItems - noOfCards + 1));

    // useEffect(() => {
    //     interval = setInterval(tick, autoPlayDelay);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // });

    const listItems = list.map((item, i) =>
        <div key={i}>
            <ImageCard title={item.title} src={`${internalApi.getFile}/${item.coverDocumentFileName}`} />
        </div>
    );

    return (
        <>
            <Slider {...sliderSettings}>
                {listItems}
            </Slider>
            {/* <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={noOfCards}
                    gutter={20}
                    // leftChevron={<button>{'<'}</button>}
                    // rightChevron={<button>{'>'}</button>}
                    outsideChevron
                    infiniteLoop={true}
                    alwaysShowChevrons={true}
                    chevronWidth={chevronWidth}
                >
                    {listItems}
                </ItemsCarousel>
            </div> */}
            <div className="content-body">
                <Row>
                    <Col className="" xs={24} sm={24} md={24} lg={16} xl={16} >
                        <div>
                            <ImageCard title={list[0].title} src={`${internalApi.getFile}/${list[0].coverDocumentFileName}`} />
                            <Row>
                                <Col className="m-b-20" xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <ImageCard title={list[1].title} src={`${internalApi.getFile}/${list[1].coverDocumentFileName}`} />
                                </Col>
                                <Col className="m-b-20" xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <ImageCard title={list[2].title} src={`${internalApi.getFile}/${list[2].coverDocumentFileName}`} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} sm={24} md={24} lg={8} xl={8} >
                        <Row>
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={24} xl={24} >
                                <div className="gutter-box">
                                    <ImageCard title={list[2].title} src={`${internalApi.getFile}/${list[3].coverDocumentFileName}`} />
                                </div>
                            </Col>
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={24} xl={24} >
                                <div className="gutter-box">
                                    <ImageCard title={list[2].title} src={`${internalApi.getFile}/${list[4].coverDocumentFileName}`} />
                                </div>
                            </Col>
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={24} xl={24} >
                                <div className="gutter-box">
                                    <ImageCard title={list[5].title} src={`${internalApi.getFile}/${list[5].coverDocumentFileName}`} />
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>

            </div>


            {/* <h1>Hello Next.js</h1>
            {listItems} */}
            {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
        </>
    );
}
export default Home;