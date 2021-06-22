import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

import logo from '../assets/logo-0-white-highres.png';


const Styles = styled.div`
    .jumbo {
        background: #000;
        height: 83vh;
        // margin-left: 4vw;
        // margin-right: 4vw;
        margin-left: -.8vw;
        margin-right: -.8vw;
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
        justify-content: center;
    }

    #bannerlogo {
        width: max(10vw, 18vh);
        z-index: 30;
        margin-top: 1vw;
    }

    #bannertext {
        flex-direction: row;
        flexShrink: 1;
        color: #fff;
        font-family: 'Spectral', sans-serif;
        font-size: min(3em, 3.5vw);
        margin-top: calc(6vh - 1vw);
    }

    #bannersubtext {
        flex-direction: row;
        flexShrink: 1;
        color: #fff;
        font-family: 'Noto Sans 400 Italic 400', sans-serif;
        font-size: min(1.3em, 1.6vw);
        font-style: italic;
        font-weight: lighter;
        color: rgba(255,255,255,.7);
        letter-spacing: .03em;
        margin-top: calc(6vh - 1vw);
    }

    // #bannerbox {
    //     margin-top
    // }

    #bannersubbox {
        width: 65%;
        margin: auto;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid id="about" className="jumbo">
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
                    <div id="bannerbox">
                        <p id="bannertext">
                            Our mandate is flexible, limitless, and simply, UNDEFINED.
                        </p>
                    </div>
                    <div id="bannersubbox">
                        <p id="bannersubtext">
                            We are cross-asset, stage-agnostic investors applying creativity and unique insights to generate alpha accross the globe.
                        </p>
                    </div>
                </div>
            </Container>
        </Jumbo>
    </Styles>
)