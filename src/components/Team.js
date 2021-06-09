import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Container } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';

import jeff from '../assets/team/jeffrey.png';
import connor from '../assets/team/connor.jpg';
import matt from '../assets/team/matt.jpg';
import eva from '../assets/team/eva.jpg';

const Styles = styled.div`

    #team-header {
        color: #000;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif; 
        font-size: 3em;
        font-weight: 505; 
        margin-left: 4vw;
        margin-top: 10vh;
    }

    #team-section {
        background: #fff;
        width: 105vw;
        margin-left: -6vw;
        margin-right: -10vw;
        padding-top: 2vh;
        padding-bottom: 2vh;
        padding-left: 16vw;
        padding-right: 16vw;
    }

    #mycenter {
        text-align: center;
        justify-content: center;
    }

    #member {
        width: 20vw;
        z-index: -500;
        border: 3px solid #000;
    }

    #name {
        font-family: 'Noto Sans 400', sans-serif; 
        font-size: 1.8vw;
        font-weight: lighter;
    }

    #member-button {
        justify-content: center;
        height: 20vw;
        width: 20vw;
        background: #fff;
        padding: 0;
        margin-top: 5vw;
        margin-bottom: 1vw;
    }
`

export const Team = () => (
    <Styles>
        <h1 id="team-header">Our Team</h1>
        <Container fluid id="team-section">
            <Row>
                <Col id="mycenter">
                    <Button id="member-button" variant="outline-none">
                        <img id="member" src={jeff} alt='Jeff' />
                    </Button>
                    <p id="name">JEFF LO</p>
                </Col>
                <Col id="mycenter">
                    <Button id="member-button" variant="outline-none">
                        <img id="member" src={connor} alt='Connor' />
                    </Button> 
                    <p id="name">CONNOR LIN</p>
                </Col>
            </Row>
            <Row>
                <Col id="mycenter">
                    <Button id="member-button" variant="outline-none">
                        <img id="member" src={matt} alt='Matt' />
                    </Button>
                    <p id="name">MATT SHERMAN</p>
                </Col>
                <Col id="mycenter">
                    <Button id="member-button" variant="outline-none">
                        <img id="member" src={eva} alt='Eva' />
                    </Button> 
                    <p id="name">EVA WENG</p>
                </Col>
            </Row>
        </Container>
    </Styles>
)

