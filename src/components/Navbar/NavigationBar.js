import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from "react-scroll";

import "../../../node_modules/jquery/dist/jquery.min.js";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

import logo from '../../assets/logo-lettering-black-highres.png';


const Styles = styled.div`
    
    .navbar {
        background-color: #fff;
        height: 17vh;
        // padding-left: 6vw;
        // padding-right: 8vw;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 2vh;
    }

    .navbar-brand, navbar-nav, .nav-link { 
        font-size: 1.3rem;
        color: #000;
    }

    .navbar-brand>img {
        margin-top: -1vh;
        // margin-top: -10px;
        width: min(34vw, 340px);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 30;
        margin-left: 6vw;
    }

    #myitem {
        padding-top: 2.5vh;
        padding-left: 3vw;
        padding-right: 3vw;
        color: #000;
        justify-content: flex-end;
    }

    #myburger {
        // margin-top: 3vh;
        margin: auto;
        // position: absolute;
        // justify-content: flex-end !important;
        max-height: 10vh;
        max-width: 10vh;

        margin-right: 6vw;
    }

    #mycollapse {
        background-color: #fff;
        z-index: 20;
        // margin-top: 1vh;
    }

    .navbar-light .navbar-nav .nav-link {
        color: #000;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif; 
        font-weight: 600; 
        // font-size: 1.2vw;
        // font-size: 2vh; 
        font-size: max(1.2vw, 2vh);
        align-items: center; 
    } 

    #mycollapse:show {
        margin-top: 10vh;
        height: 50vh;
    }

    @media (max-width: 991px) {
        .navbar-brand {
            height: 80px; // Logo will not overhang
        }
      }

`;

export const NavigationBar = () => (
    <Styles>
        <Navbar collapseOnSelect expand="lg" fixed="top"> 
            <Nav>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Undefined"/>
                </Navbar.Brand>
            </Nav>
            {/* <Bars/> */}
            <Navbar.Toggle id="myburger"/>
            <Navbar.Collapse id="mycollapse">
            <Nav className="ml-auto">
            <Link to="about"
                smooth={true}
                offset={-170}
                duration={750}><Nav.Link id="myitem">ABOUT</Nav.Link></Link>
            <Link to="portfolio"
                smooth={true}
                offset={-170}
                duration={750}><Nav.Link id="myitem">PORTFOLIO</Nav.Link></Link>
            <Link to="team"
                smooth={true}
                offset={-170}
                duration={750}><Nav.Link id="myitem">TEAM</Nav.Link></Link>
            <Link to="contact"
                smooth={true}
                offset={-170}
                duration={750}><Nav.Link id="myitem" style={{marginRight: '6vw'}}>CONTACT</Nav.Link></Link>
                
                {/* <Link className="link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={750}>
                        <Nav.Link id="myitem" >ABOUT</Nav.Link>
                </Link>
                <Link className="link"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={750}>
                    <Nav.Link id="myitem" href="/portolfio">PORTFOLIO</Nav.Link>
                </Link>
                <Link className="link"
                    activeClass="active"
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={750}>
                    <Nav.Link id="myitem" href="/team">TEAM</Nav.Link>
                </Link>
                <Link className="link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={750}>
                    <Nav.Link id="myitem" to="/contact">CONTACT</Nav.Link>
                </Link>      */}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

