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
        padding-left: 6vw;
        padding-right: 10vw;
        padding-bottom: 2vh;
    }

    .navbar-brand, navbar-nav, .nav-link { 
        font-size: 1.3rem;
        color: #000;
    }

    .navbar-brand>img {
        margin-top: -10px;
        width: min(40vw, 400px);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 30;
    }

    #myitem {
        padding-top: 2.5vh;
        padding-left: 2vw;
        padding-right: 2vw;
        color: #000;
        justify-content: flex-end;
    }

    #myburger {
        margin-top: 2vh;
        max-height: 10vh;
        max-width: 10vh
    }

    #mycollapse {
        background-color: #fff;
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
                {/* <Nav.Item id="myitem"><Nav.Link href="/">ABOUT</Nav.Link></Nav.Item>
                <Nav.Item id="myitem"><Nav.Link href="/">PORTFOLIO</Nav.Link></Nav.Item>
                <Nav.Item id="myitem"><Nav.Link href="/">TEAM</Nav.Link></Nav.Item>
                <Nav.Item id="myitem"><Nav.Link href="/">CONTACT</Nav.Link></Nav.Item> */}
                <Link className="link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={750}>
                        <Nav.Link activeStyle id="myitem" >ABOUT</Nav.Link>
                </Link>
                <Link className="link"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={750}>
                    <Nav.Link activeStyle id="myitem" href="/portolfio">PORTFOLIO</Nav.Link>
                </Link>
                <Link className="link"
                    activeClass="active"
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={750}>
                    <Nav.Link activeStyle id="myitem" href="/team">TEAM</Nav.Link>
                </Link>
                <Link className="link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={750}>
                    <Nav.Link activeStyle id="myitem" to="/contact">CONTACT</Nav.Link>
                </Link>     
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

// export const aboutRef = useRef()

// export function handleAboutClick() {
//     aboutRef.current.scrollIntoView({ behavior: 'smooth' })
// }

// export const NavigationBar = () => (
//     <Styles>
//         <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
//             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="mr-auto">
//                 <Nav.Link href="#features">Features</Nav.Link>
//                 <Nav.Link href="#pricing">Pricing</Nav.Link>
//                 <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                 </NavDropdown>
//                 </Nav>
//                 <Nav>
//                 <Nav.Link href="#deets">More deets</Nav.Link>
//                 <Nav.Link eventKey={2} href="#memes">
//                     Dank memes
//                 </Nav.Link>
//                 </Nav>
//             </Navbar.Collapse>
//             </Navbar>
//     </Styles>
// )




