import { React } from 'react';
import styled from 'styled-components';
// import TouchableOpacity from 'react-native';
import { Jumbotron as Container } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';

import map from '../assets/landmarked-map.svg';
import stripe from '../assets/investments/stripe.png';
import kraken from '../assets/investments/kraken.png';
import bytedance from '../assets/investments/bytedance.png';
import cloverhealth from '../assets/investments/clover-health.jpeg';
import otis from '../assets/investments/otis.png';
import coinbase from '../assets/investments/coinbase.png';
import instacart from '../assets/investments/instacart.svg';
import moti from '../assets/investments/moti.png';
import ramp from '../assets/investments/ramp.png';


const Styles = styled.div`

    #portfolio-header {
        color: #000;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif; 
        font-size: 3em;
        // font-size: 2.5vw;
        font-weight: 505; 
        margin-left: 7.7vw;
        margin-top: 3vh;
    }

    #portfolio-statement {
        color: #000;
        font-family: 'Noto Sans 400 Italic 400', sans-serif;
        // font-family: Noto Sans;
        font-size: min(1.3em, 1.6vw);
        font-style: italic;
        font-weight: lighter;
        // font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
        // font-size: 1.7rem;
        // font-weight: 200;
        // font-style: italic; 
        margin: auto;
        margin-top: 8vh;
        letter-spacing: .04em;
    }

    #mycenter {
        text-align: center;
        justify-content: center;
    }

    #mymap {
        flex: 1;
        width: 60vw;
        resizeMode: 'contain';
    }

    #investments-header {
        color: #000;
        font-family: 'Noto Sans 400', sans-serif; 
        font-size: 1.8em;
        font-weight: 100;
        margin-left: 7.7vw;
        margin-top: 3vh;
        margin-bottom: 4vh;
    }

    #investment-section {
        background: #DBDBDB;
        padding-top: 4vh;
        padding-bottom: 4vh;
        padding-left: 20vw;
        padding-right: 20vw;
    }

    #portfolio-section {
        background: #fff;
        padding: 0;
        margin:0;
    }

    #investment {
        width: 12vw;
    }

    #investment-button {
        height: 14vw;
        width: 14vw;
        background: #fff;
        padding: 0;
        margin-top: 3vw;
        margin-bottom: 3vw;
        outline: none!;
        point-events: none;
    }

    .description {
        position: absolute;
        resizeMode: 'contain'
        top: 0;
        bottom: 0;
        // margin-bottom: 3vw;
        margin-bottom: 3.03vw;
        margin-right: 2.2vw;
        // margin-right: .13vw;
        // border: 2px solid black;
        border: 1px solid black;
        // border: 0;
        // height: 69.3%;
        // width: 66%;
        height: 13.92vw;
        // height: 14vw;
        width: 13.92vw;
        // width: 14vw;
        background: #C4C4C4;
        color: #fff;
        visibility: hidden;
        opacity: 0;
        text-align: left;
        padding-left: 1vw;
        padding-right: 1vw;
        font-size: 1.6vw;
      
        /* transition effect. not necessary */
        transition: opacity .5s, visibility .5s;
      }

    .description-sm {
        position: absolute;
        resizeMode: 'contain'
        top: 0;
        bottom: 0;
        // margin-bottom: 3vw;
        margin-bottom: 3.05vw;
        // border: 2px solid black;
        border: 1px solid black;
        // border: 0;
        height: 13.88vw;
        // height: 14vw;
        width: 13.92vw;
        width: 14vw;
        background: #C4C4C4;
        color: #fff;
        visibility: hidden;
        opacity: 0;
        text-align: left;
        padding: 1vw;
        font-size: 1.2vw;
        
        /* transition effect. not necessary */
        transition: opacity .5s, visibility .5s;
    }

    #investment-button:focus {
        box-shadow: none;
    }

    #investment-button-black:focus {
        box-shadow: none;
    }
    
    #investment-button:hover .description {
        // visibility: visible;
        // opacity: 1;
        visibility: visible;
        opacity: .1;
        resizeMode: 'contain';
    }

    #investment-button:hover .description-sm {
        // visibility: visible;
        // opacity: 1;
        visibility: hidden;
        opacity: 0;
        resizeMode: 'contain';
    }

    #investment-button-black {
        height: 14vw;
        width: 14vw;
        background: #000;
        padding: 0;
        margin-top: 3vw;
        margin-bottom: 3vw;
    }

    #investment-button-black:hover .description {
        // visibility: visible;
        // opacity: 1;
        visibility: hidden;
        opacity: 0;
    }

    @media (max-width: 786px) {
        #portfolio-header {
            color: #000;
            font-family: 'Neue Haas Grotesk Display Pro', sans-serif; 
            font-size: 2em;
            // font-size: 2.5vw;
            font-weight: 505; 
            margin-left: 7.7vw;
        }

        #mymap {
            flex: 1;
            width: 80vw;
            resizeMode: 'contain';
        }

        #portfolio-statement {
            color: #000;
            // font-family: 'Noto Sans 400 Italic 400', sans-serif;
            font-family: Noto Sans;
            font-size: min(1.6em, 2.5vw);
            font-style: italic;
            font-weight: lighter;
            // font-family: 'Neue Haas Grotesk Display Pro', sans-serif;
            // font-size: 1.7rem;
            // font-weight: 200;
            // font-style: italic; 
            margin: auto;
            margin-top: 4vh;
            letter-spacing: .04em;
        }

        #investments-header {
            color: #000;
            // font-family: 'Noto Sans 400 Italic 400', sans-serif;
            font-family: Noto Sans;
            font-size: 1.3em;
            font-weight: 100;
            margin-left: 7.7vw;
            margin-top: 1vh !importants;
            margin-bottom: 3vh;
        }

        .stripe {
            padding-top: 1vw !important;
        }
    }

    
`

export const Portfolio = () => (
    <Styles>
        <h1 id="portfolio-header">Portfolio</h1>
        <Container id="portfolio-section">
            <div id="mycenter">
                <p id="portfolio-statement">
                    Global investment mandate, at any stage, in any industry.
                </p>
                <div>
                    <img id="mymap" src={map} alt='map' />
                </div>
            </div>
        </Container>
        <div id="portfolio">
        <h2 id="investments-header">Select Investments</h2>
        <Container fluid id="investment-section">
            <Row>
                <Col id="mycenter">
                    <Button href="https://stripe.com/" id="investment-button" variant="outline-dark">
                        <img id="investment" src={stripe} alt='Stripe'  style={{marginTop: '28%'}}/>
                        {/* <p><a className="description stripe" style={{paddingTop: '2vw'}}>Stripe</a></p> */}
                    </Button>
                </Col>
                <Col id="mycenter">
                    <Button href="https://kraken.com" id="investment-button" variant="outline-dark">
                        <img id="investment" src={kraken} alt='Kraken' style={{marginTop: '36%'}}/>
                        {/* <p><a className="description" style={{paddingTop: '3vw'}} href="https://kraken.com">Kraken</a></p> */}
                    </Button> 
                </Col>
                <Col id="mycenter">
                    <Button href="https://www.bytedance.com/en/" id="investment-button" variant="outline-dark">
                        <img id="investment" src={bytedance} alt='ByteDance' style={{marginTop: '26%'}}/>
                        {/* <p className="description" style={{paddingTop: '1.8vw'}}>Multinational internet technology company</p> */}
                    </Button> 
                </Col>
            </Row>
            <Row>
                <Col id="mycenter">
                    <Button href="https://www.cloverhealth.com/en/" id="investment-button" variant="outline-dark">
                        <img id="investment" src={cloverhealth} alt='Clover Health' style={{marginTop: '27%'}}/>
                        {/* <p className="description-sm" style={{paddingTop: '1vw'}}>Preferred Provider Organization (PPO) & a Health Maintenance Organization (HMO) with a Medicare contract</p> */}
                    </Button> 
                </Col>
                <Col id="mycenter">
                    <Button href="https://www.withotis.com/" id="investment-button-black" variant="outline-dark">
                        <img id="investment" src={otis} alt='Otis' style={{marginTop: '23%'}}/>
                        {/* <p className="description" style={{paddingTop: '4vw'}}>Stock market for culture</p> */}
                    </Button> 
                </Col>
                <Col id="mycenter">
                    <Button href="https://www.coinbase.com/" id="investment-button" variant="outline-dark">
                        <img id="investment" src={coinbase} alt='Coinbase' style={{marginTop: '36%'}}/>
                        {/* <p className="description" style={{paddingTop: '3vw'}}>Buy, sell, and trade digital currency</p> */}
                    </Button> 
                </Col>
            </Row>
            <Row>
                <Col id="mycenter">
                    <Button href="https://www.instacart.com/" id="investment-button" variant="outline-dark">
                        <img id="investment" src={instacart} alt='Instacart' style={{marginTop: '38%'}}/>
                        {/* <p className="description" style={{paddingTop: '3vw'}}>Grocery pickup and delivery service</p> */}
                    </Button> 
                </Col>
                <Col id="mycenter">
                    <Button href="https://motiplanet.com/" id="investment-button" variant="outline-dark">
                        <img id="investment" src={moti} alt='Moti' style={{marginTop: '23%'}}/>
                        {/* <p className="description" style={{paddingTop: '4vw'}}>E-cigarettes company</p> */}
                    </Button> 
                </Col>
                <Col id="mycenter">
                    <Button href="https://ramp.com/" id="investment-button" variant="outline-dark" >
                        <img id="investment" src={ramp} alt='Ramp' style={{marginTop: '36%'}}/>
                        {/* <p className="description" style={{paddingTop: '1.8vw'}}>Corporate card and spend management platform</p> */}
                    </Button> 
                </Col>
            </Row>
        </Container>
        </div>
        
    </Styles>
    
)


