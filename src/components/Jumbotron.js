import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

import logo from '../assets/logo-0-white-highres.png';


const Styles = styled.div`
    .jumbo {
        background: #000;
        height: 78vh;
        margin-left: 4vw;
        margin-right: 4vw;
        margin-top: 17vh;
        // position: relative;
        margin-bottom: 10vh;
        textAlign: center;
    }

    .jumbo2 {
        background: #fff;
    }

    #mycenter {
        text-align: center;
    }

    #bannerlogo {
        width: 10vw;
        z-index: 30;
        margin-top: 7vh;
    }

    #bannertext {
        flex-direction: row;
        flexShrink: 1;
        color: #fff;
        font-family: 'Spectral', sans-serif;
        font-size: 3em;
    }

    #bannersubtext {
        flex-direction: row;
        flexShrink: 1;
        color: #fff;
        font-family: 'Noto Sans 400 Italic 400', sans-serif;
        font-size: 1em;
        font-style: italic;
        font-weight: 100;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            {/* <div className="overlay"> */}
                {/* <Jumbo fluid className="jumbo2">
                    <Container>
                        Yup
                    </Container>
                </Jumbo> */}
            {/* </div> */}
            <Container >
                <div id="mycenter">
                    <img id="bannerlogo" src={logo} alt="Undefined"/>
                </div>
                <div id="mycenter">
                    <p id="bannertext">
                        Our mandate is flexible, limitless, and simply, UNDEFINED.
                    </p>
                    <p id="bannersubtext">
                        We are cross-asset, stage-agnostic investors applying creativity and unique insights to generate alpha accross the globe.
                    </p>
                </div>
            </Container>
        </Jumbo>
    </Styles>
)