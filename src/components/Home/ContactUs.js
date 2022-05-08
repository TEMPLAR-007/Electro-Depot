import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Iframe from 'react-iframe';
import './ContactUs.css';


const ContactUs = () => {
    return (
        <div className='container mt-5'>
            <Row className=' d-flex align-items-center g-0 mb-5 '>
                <Col xs={12} md={5}>
                    <div className='text-start'>
                        <section>
                            <div className="contact-box">
                                <h1 className="text-light text-center">REQUEST A QUOTE</h1>
                                <p className="text-light text-center">We'd love to hear from you!</p>

                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" name="Name" placeholder='Name' />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input className="form-control" id="email" type="email" name="Email" placeholder='Email' />
                                </div>
                                <br />
                                <div className="form-group">
                                    <textarea className="form-control" id="message" name="Message" placeholder='Message'></textarea>
                                </div>
                                <br />
                                <div className="d-flex justify-content-center">
                                    <input className="btn btn-info text-white fw-bold  w-100" type="submit" value="Submit" />
                                </div>
                            </div>
                        </section>
                    </div>
                </Col>

                <Col xs={12} md={7}>
                    <div className='map'>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977793321!2d90.34928583919222!3d23.780777744454788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1652015756933!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default ContactUs;