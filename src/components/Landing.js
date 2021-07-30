import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

import logo from '../assets/landinglogo.png';


const Styles = styled.div`
    .jumbo {
        background: #000;
        height: 100vh;
        width: 100vw;
        textAlign: center;
        position: absolute;
    }

    #mycenter {
        text-align: center;
        justify-content: center;
    }

    #bannerlogo {
        width: max(25vw, 30vh);
        z-index: 30;
        margin: auto;
        margin-top: min(40%, 8vh);
    }
`;

export const Landing = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <Container >
                <div id="mycenter">
                    <img id="bannerlogo" src={logo} alt="Undefined"/>
                </div>
            </Container>
        </Jumbo>
    </Styles>
)