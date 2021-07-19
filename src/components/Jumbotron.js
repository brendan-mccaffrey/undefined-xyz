import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

import logo from '../assets/logo-0-white-highres.png';


const Styles = styled.div`
    .jumbo {
        background: #000;
        height: 83vh;
        margin-top: 17vh;
        padding-top: 13vh;
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

    #bannersubbox {
        width: 65%;
        margin: auto;
    }

    @media (max-width: 786px) {
        // For mobile phones
        .jumbo {
            height: 38vh;
            width: 100vw;
            margin-top: 17vh;
            padding-top: calc(5.5vh - 6vw);
            margin-bottom: 6vh;
            textAlign: center;
        }

        #bannerlogo {
            width: max(7vw, 12vh);
            z-index: 30;
            margin-top: 5vw;
        }

        #bannertext {
            flex-direction: row;
            flexShrink: 1;
            color: #fff;
            font-family: 'Spectral', sans-serif;
            font-size: min(2.5em, 2.8vw);
            margin-top: calc(4vh - 2vw);
        }
    
        #bannersubtext {
            flex-direction: row;
            flexShrink: 1;
            color: #fff;
            font-family: 'Noto Sans 400 Italic 400', sans-serif;
            font-size: min(1.5em, 1.8vw);
            font-style: italic;
            font-weight: lighter;
            color: rgba(255,255,255,.7);
            letter-spacing: .03em;
            margin-top: calc(4vh - 2vw);
        }

        #bannerbox {
            width: 100%;
            margin: auto;
        }
    
        #bannersubbox {
            width: 75%;
            margin: auto;
        }
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid id="about" className="jumbo">
            <Container>
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