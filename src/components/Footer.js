import React from 'react';
import { Nav, Navbar, Form, Button, Col, Row, OverlayTrigger, Popover } from 'react-bootstrap';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { MDBContainer } from "mdbreact";

import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import logo from '../assets/logo-0-white-highres.png';

const Styles = styled.div`
    
    .navbar {
        background-color: #000;
        height: 60vh;
        padding-left: 6vw;
        padding-right: 10vw;
        // padding-bottom: 4vh;
        // margin-bottom:0;
    }

    .navbar-brand, navbar-nav, .nav-link { 
        font-size: 1.3rem;
        color: #fff;
    }

    .navbar-brand>img {
        // margin-top: -10px;
        width: min(40vw, 400px);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 30;
    }

    #myitem {
        padding-top: 5vh;
        padding-left: 2vw;
        padding-right: 2vw;
        color: #fff;
        justify-content: flex-end;
    }

    #myburger {
        margin-top: 4vh;
        max-height: 10vh;
        max-width: 10vh;
    }

    .navbar-light .navbar-toggler {
        background-color: #fff;
        border-color: #fff;
        color: #fff;
    }

    #mycollapse {
        background-color: #000;
        z-index: 20;
    }

    .navbar-light .navbar-nav .nav-link {
        color: #000;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif; 
        font-weight: 505;  
        align-items: center;  
    } 

    @media (max-width: 991px) {
        .navbar-brand {
            height: 30px; // Logo will not overhang
        }
        
        .navbar-toggle {
          margin-top: 0px; // Adjust toggle position
        }
    }

    #myform {
        // margin-right: 5vw;
        margin-bottom: 10vh;
    }

    .navbar-brand>img {
        margin-top: 25vh;
        margin-left: .6vw;
        width: min(12vw, 120px);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 30;
    }

    #contact-header {
        color: #fff;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif; 
        font-size: 3em;
        font-weight: 505; 
        margin-top: 10vh;
    }

    #mytextarea {
        maxHeight: 30vh;
    }

    .btn.btn-square {
        border-radius: 0;
    }

    #mycopyright {
        background-color: #000;
    }

    #credit {
        padding-top: 4vh;
        font-size: 1vw;
    }

`;

const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Success!</Popover.Title>
    </Popover>
  );

export const Footer = () => (
    <Styles>
        <div id="contact">
            <Navbar collapseOnSelect expand="lg"> 
                <Navbar.Collapse>
                    <Nav>
                        <Navbar.Brand href="/">
                            <img id="bottom-logo" src={logo} alt="Undefined"/>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
                <Form className="ml-auto" id="myform" onSubmit={sendEmail}>
                    <h1 id="contact-header">Contact Us</h1>
                    <Form.Group as={Row} style={{marginBottom: '1.6vw', marginTop: '.8vw'}}>
                        <Col><Form.Control style={{border: "1px solid white", background: "#000", color: "#fff"}} placeholder="First Name" name="first_name" /></Col>
                        <Col><Form.Control style={{border: "1px solid white", background: "#000", color: "#fff"}} placeholder="Last Name" name="last_name" /></Col>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail" style={{marginBottom: '1.6vw'}}>
                        <Form.Control style={{border: "1px solid white", background: "#000", color: "#fff"}} type="email" name="email" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group controlId="formGroupTextarea">
                        <Form.Control style={{border: "1px solid white", background: "#000", color: "#fff", 
                        maxHeight: "22vh", minHeight: "4.5vh"}} as={"textarea"} rows={3} placeholder="Message" name="message" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check Me" style={{color: "#fff"}} required/>
                    </Form.Group>
                    <OverlayTrigger
                        trigger='click'
                        placement={'right'}
                        overlay={popover}>
                        <Button className="btn btn-square" variant="light" type="submit">
                        Submit
                    </Button>
                    </OverlayTrigger>
                </Form>
            </Navbar>
            <div className="footer-copyright text-center py-3" id="mycopyright">
                <MDBContainer id="mycopyright" fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a style={{color: 'inherit'}} href="https://undefined.xyz"> Undefined LLC </a>
                </MDBContainer>
                <MDBContainer fluid>
                    Website by <a style={{color: 'inherit'}} href="https://github.com/brendan-mccaffrey"> Brendan McCaffrey </a>
                </MDBContainer>
            </div>
        </div>
    </Styles>
)


export default function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ns0mlir', 'template_rcc3v07', e.target, 'user_koeIGXdTYvPfgIPcMG8uq')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};

