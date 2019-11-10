import Head from 'next/head';
// import { useState, useEffect } from 'react';//useEffect
import Slider from "react-slick";

function Blog() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };


    return (
        <>
            <Head>
                <title>My Blog</title>
            </Head>
            <div>
                Hello My Blog =>
            </div>

            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </>
    );
}


export default Blog;
