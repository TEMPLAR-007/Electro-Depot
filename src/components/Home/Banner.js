import React from 'react';
import { Button, Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item className='bg-light'>
                    <div className="row d-flex align-items-center p-5 container mx-auto ">
                        <div className="col-lg-5 text-start">
                            <h5 className='text-primary'>FROM $20.25</h5>
                            <h1 className="fw-bolder">MI WATCH</h1>
                            <p className="mt-4 fw-bold text-muted">The Xiaomi Mi Watch Lite is a smartwatch that becomes an extention of your phone</p>
                            <ul className="text-muted mb-4">
                                <li>Barometer is perfect for those who do a lot of sports</li>
                                <li>Accelerometer sensor needed especially for sports functions</li>
                                <li>Gyroscope function measures inclination</li>
                            </ul>

                            <Button variant="primary">BUY</Button>

                        </div>
                        <div className="col-lg-7">
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/ZW3xWSY/section01-img02.png"
                                alt="First slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='bg-light'>
                    <div className="row d-flex align-items-center p-5 container mx-auto ">
                        <div className="col-lg-5 text-start">
                            <h5>STANMORE II BLUETOOTH</h5>
                            <h1 className="fw-bolder">MARSHALL</h1>
                            <p className="mt-4 fw-bold text-muted">Classic Marshall details such as a textured vinyl covering, salt & pepper fret and the iconic script logo adorn the sturdy wooden frame of Stanmore II.</p>
                            <ul className="text-muted mb-4">
                                <li>BLACK</li>
                                <li>IN STOCK</li>
                            </ul>

                            <Button variant="primary">BUY</Button>

                        </div>
                        <div className="col-lg-7">
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/bRnXHrW/marshall-audio-1002493-acton-ii-voice-speaker-1445074.png"
                                alt="First slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='bg-light'>
                    <div className="row d-flex align-items-center p-5 container mx-auto ">
                        <div className="col-lg-5 text-start">
                            <h5 className='text-primary'>FROM $49.99</h5>
                            <h1 className="fw-bolder">XBOX WIRELESS CONTROLLER</h1>
                            <p className="mt-4 fw-bold text-muted">Elevate your game
                                Experience the modernized design of the Xbox Wireless Controller, featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay.</p>
                            <ul className="text-muted mb-4">
                                <li>Seamlessly capture and share content with the new Share button.</li>
                                <li>Stay on target with the new hybrid D-pad controller.</li>
                                <li>Switch devices Easily pair and switch between devices including Xbox Series X, Xbox Series S, Xbox One, Windows PC, Android, and iOS.</li>
                            </ul>

                            <Button variant="primary">BUY</Button>

                        </div>
                        <div className="col-lg-7">
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/QKsmLkc/ads.png"
                                alt="First slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;