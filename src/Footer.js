import React from 'react';
import './Footer.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterSection = ()=>{
    return (
        <div>
            <div className='footersection'>
                <Container className='footercontainer'>
                    <Row>
                        <Col className="footerCol" style = {{borderRight:"2px solid #404040"}}>
                            <Row>
                                <Col>
                                    <Row className="footerheadings">Terms and Policies</Row>
                                    <Row className="footerdata">Privacy Policy</Row>
                                    <Row className="footerdata">Hyperlink Policy</Row>
                                    <Row className="footerdata">Website Policies</Row>  
                                </Col>
                                <Col>
                                    <Row className='footerheadings'>About</Row>
                                    <Row className="footerdata">About Us</Row>
                                </Col>
                                <Col>
                                    <Row className='footerheadings'>Need Help</Row>
                                    <Row className="footerdata">Contact Us</Row>
                                    <Row className="footerdata">Frequently Asked Questions</Row>
                                    <Row className="footerdata">Raise a concern</Row>
                                    <Row className="footerdata">Feedback</Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="footerCol">logo and stuff</Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default FooterSection;