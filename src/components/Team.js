import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Container } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';

import jeff from '../assets/team/jeffrey.png';
import brendan from '../assets/team/brendan.jpg';
import connor from '../assets/team/connor.jpg';
import matt from '../assets/team/matt.jpg';
import eva from '../assets/team/eva.jpg';

const Styles = styled.div`

    #team-header {
        color: #000;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif; 
        font-size: 3em;
        font-weight: 505; 
        margin-left: 7.7vw;
        margin-top: 9vh;
    }

    #team-section {
        background: #fff;
        width: 100vw;
        align: center;
        // margin-left: -3.5vw;
        // margin-right: -10vw;
        margin-top: 3vh;
        // padding-top: 6vh;
        padding-bottom: 2vh;
        padding-left: 14vw;
        padding-right: 14vw;
    }

    #mycenter {
        text-align: center;
        justify-content: center;
    }

    #member {
        width: 16vw;
        z-index: -500;
        border: 3px solid #000;
    }

    #name {
        font-family: 'Noto Sans 400', sans-serif; 
        font-size: 1.4vw;
        font-weight: 100;
    }

    #member-button {
        justify-content: center;
        height: 20vw;
        width: 20vw;
        background: #fff;
        padding: 0;
        // margin-top: 5vw;
        margin-bottom: -3vh;
        
    }

    #team-row {
        height: 26vw;
    }

    #mycenter:focus {
        box-shadow: none;
    }

    #member-button:focus {
        box-shadow: none;
    }

    @media (max-width: 786px) {
        #team-header {
            color: #000;
            font-family: 'Neue Haas Grotesk Display Pro', sans-serif; 
            font-size: 2em;
            // font-size: 2.5vw;
            font-weight: 505; 
            margin-left: 7.7vw;
            margin-top: 6vh;
        }

        #name {
            font-family: 'Noto Sans 400', sans-serif; 
            font-size: 1.4vw;
            font-weight: 100;
            margin-top: 2vh;
        }

        #team-section {
            background: #fff;
            width: 100vw;
            align: center;
            // margin-left: -3.5vw;
            // margin-right: -10vw;
            margin-top: 3vh;
            // padding-top: 6vh;
            padding-bottom: 2vh;
            padding-left: 10vw;
            padding-right: 10vw;
        }
    }
`

export const Team = () => (
    <Styles>
        <div id="team">
            <h1 id="team-header">Our Team</h1>
            <Container fluid id="team-section">
                <Row id="team-row">
                    <Col id="mycenter">
                        <Button href="https://www.linkedin.com/in/jeffrey-lo-6b54317/" id="member-button" variant="outline-none">
                            <img id="member" src={jeff} alt='Jeff' />
                        </Button>
                        <p id="name">JEFF LO</p>
                    </Col>
                    <Col id="mycenter">
                        <Button href="https://www.linkedin.com/in/brendan-mccaffrey/" id="member-button" variant="outline-none">
                            <img id="member" src={brendan} alt='Brendan' />
                        </Button>
                        <p id="name">BRENDAN McCAFFREY</p>
                    </Col>
                    {/* <Col id="mycenter">
                    <Button href="https://www.linkedin.com/in/connorlin/" id="member-button" variant="outline-none">
                        <img id="member" src={connor} alt='Connor' />
                    </Button> 
                    <p id="name">CONNOR LIN</p>
                </Col>
                <Col id="mycenter">
                    <Button href="https://www.linkedin.com/in/matthew-sherman-b199a4111/" id="member-button" variant="outline-none">
                        <img id="member" src={matt} alt='Matt' />
                    </Button>
                    <p id="name">MATT SHERMAN</p>
                </Col> */}
                    {/* <Col id="mycenter">
                    <Button href="https://www.linkedin.com/in/eva-j-weng-34b16738/" id="member-button" variant="outline-none">
                        <img id="member" src={eva} alt='Eva' />
                    </Button> 
                    <p id="name">EVA WENG</p>
                </Col>  */}
                </Row>
                <Row>
                    {/* <Col id="mycenter">
                    <Button id="member-button" variant="outline-none">
                        <img id="member" src={matt} alt='Matt' />
                    </Button>
                    <p id="name">MATT SHERMAN</p>
                </Col> */}
                    {/* <Col id="mycenter">
                    <Button id="member-button" variant="outline-none">
                        <img id="member" src={eva} alt='Eva' />
                    </Button> 
                    <p id="name">EVA WENG</p>
                </Col> */}
                </Row>
            </Container>
        </div>
    </Styles>
)

