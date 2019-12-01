
import { Row, Col, Divider } from 'antd';
import ImageCard from '../ImageCard';
import { internalApi } from '../../constants/ApiUrl';
// import { useState, useEffect } from 'react';

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

            <div className="content-body">
                <Divider orientation="left"><h1>ล่าสุด</h1></Divider>
                <Row>
                    <Col className="" xs={24} sm={24} md={24} lg={16} xl={16} >

                        <div className="p-5">
                            <ImageCard title={list[0].title} src={`${internalApi.getFile}/${list[0].coverDocumentFileName}`} />
                        </div>
                        <Row>
                            <Col className="" xs={24} sm={24} md={12} lg={12} xl={12}>
                                <div className="p-5">
                                    <ImageCard className="p-10" title={list[1].title} src={`${internalApi.getFile}/${list[1].coverDocumentFileName}`} />
                                </div>
                            </Col>
                            <Col className="" xs={24} sm={24} md={12} lg={12} xl={12}>
                                <div className="p-5">
                                    <ImageCard className="p-10" title={list[2].title} src={`${internalApi.getFile}/${list[2].coverDocumentFileName}`} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="" xs={24} sm={24} md={24} lg={8} xl={8} >
                        <Row>
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={24} xl={24} >
                                <div className="p-5">
                                    <ImageCard title={list[3].title} src={`${internalApi.getFile}/${list[3].coverDocumentFileName}`} />
                                </div>
                            </Col>
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={24} xl={24} >
                                <div className="p-5">
                                    <ImageCard title={list[4].title} src={`${internalApi.getFile}/${list[4].coverDocumentFileName}`} />
                                </div>
                            </Col>
                            <Col className="gutter-row" xs={24} sm={24} md={12} lg={24} xl={24} >
                                <div className="p-5">
                                    <ImageCard title={list[5].title} src={`${internalApi.getFile}/${list[5].coverDocumentFileName}`} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    );
}
export default Home;