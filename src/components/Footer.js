import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import styled from 'styled-components';

import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import logo from '../assets/logo-lettering-white-highres.png';

const Styles = styled.div`
    
    .navbar {
        background-color: #000;
        height: 30vh;
        padding-left: 6vw;
        padding-right: 10vw;
        padding-bottom: 4vh;
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
            height: 80px; // Logo will not overhang
        }
        
        .navbar-toggle {
          margin-top: 0px; // Adjust toggle position
        }
      }

`;

export const Footer = () => (
        <Styles>
        <Navbar collapseOnSelect expand="lg"> 
            <Nav>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Undefined"/>
                </Navbar.Brand>
            </Nav>
            {/* <Bars/> */}
            <Navbar.Toggle id="myburger"/>
            <Navbar.Collapse id="mycollapse">
            <Nav className="ml-auto">
                {/* <NavMenu> */}
                    {/* <Nav.Item id="myitem"><Nav.Link href="/">ABOUT</Nav.Link></Nav.Item>
                    <Nav.Item id="myitem"><Nav.Link href="/">PORTFOLIO</Nav.Link></Nav.Item>
                    <Nav.Item id="myitem"><Nav.Link href="/">TEAM</Nav.Link></Nav.Item>
                    <Nav.Item id="myitem"><Nav.Link href="/">CONTACT</Nav.Link></Nav.Item> */}
                    <Nav.Link activeStyle id="myitem" href="/">ABOUT</Nav.Link>
                    <Nav.Link activeStyle id="myitem" href="/">PORTFOLIO</Nav.Link>
                    <Nav.Link activeStyle id="myitem" href="/">TEAM</Nav.Link>
                    <Nav.Link activeStyle id="myitem" href="/">CONTACT</Nav.Link>
                {/* </NavMenu> */}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)


