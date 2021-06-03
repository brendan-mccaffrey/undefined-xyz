import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../../assets/logo-lettering-black-highres.png';

const Styles = styled.div`
    .navbar {
        background-color: #fff;
        height: 17vh;
        padding-left: 10vw;
        padding-right: 10vw;
        padding-bottom: 3vh;
    }

    .navbar-brand, navbar-nav, .nav-link {
        align: right;
        font-size: 1.3rem;
        color: #000;
    }

    .navbar-brand>img {
        height: 45vh;
    }

    #myitem {
        padding-top: 2.5vh;
        padding-left: 2vw;
        padding-right: 2vw;
        color: #000;
    }

    .navbar-light .navbar-nav .nav-link {
        color: #000;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif; 
        font-weight: 505;  
        justify                   
    } 

`;

export const NavigationBar = () => (
    <Styles>
        <Navbar fixed="top"> 
            <Navbar.Brand href="/">
                <img src={logo} alt="Undefined"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item id="myitem"><Nav.Link href="/">ABOUT</Nav.Link></Nav.Item>
                    <Nav.Item id="myitem"><Nav.Link href="/">PORTFOLIO</Nav.Link></Nav.Item>
                    <Nav.Item id="myitem"><Nav.Link href="/">TEAM</Nav.Link></Nav.Item>
                    <Nav.Item id="myitem"><Nav.Link href="/">CONTACT</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

