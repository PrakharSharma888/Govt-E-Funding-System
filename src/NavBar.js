/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import logo from './Images/E-Lending.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar =()=> (
    <div>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img src={logo} style = {{width:"150px",height:"70px"}} alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '70px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" style={{background: "cadetblue"}}>Home</Nav.Link>
                        <Nav.Link href="#action2" style={{background: "cadetblue"}}>About</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="secondary" className="me-2" size = "lg">Create Proposal</Button>
                        <Button variant="secondary" className="me-5" size = "lg">View Proposal</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
)
export default NavBar;