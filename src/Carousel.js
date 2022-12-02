import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Panchayat1 from './Images/Panchayat1.jpg';
import ZilaParishad from './Images/ZilaParishad.jpg';
import GovtIndia from './Images/GovtIndia.jpg';
const SiteCarousel = ()=>{
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={GovtIndia}
                    alt="First slide"
                    style = {{height: "500px"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Panchayat1}
                    alt="Second slide"
                    style = {{height: "500px"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ZilaParishad}
                    alt="Third slide"
                    style = {{height: "500px"}}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default SiteCarousel;