import React from 'react';
import './Main.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Main = () => {
    return (
        <div>
            <div className='mainsection'>
                <Container className='maincontainer'>
                    <Row>
                        <Col className='text-center' style = {{borderRight:"2px solid #404040"}}>
                            <p className='createText'>
                                Click To Create New Proposal
                            </p>
                            <Button variant="secondary" size = "lg">Create Proposal</Button>
                        </Col>
                        <Col className='text-center'>
                            <p className='viewText'>
                                Click To View Proposals
                            </p>
                            <Button variant="secondary" size = "lg">View Proposal</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Main;