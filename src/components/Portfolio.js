import React from 'react';
import styled from 'styled-components';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';


const Styles = styled.div`

    #portfolio-header {
        color: #000;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif; 
        font-size: 3em;
        font-weight: 505; 
        margin-left: 4vw;
        margin-top: 3vh;
    }

    #portfolio-statement {
        color: #000;
        font-family: 'Neue Haas Grotesk Display Pro', sans-serif; 
        margin: auto;
        margin-top: 8vh;
        font-size: 1.6rem;
        font-weight: 200;
        font-style: italic;
        letter-spacing: .04em;
    }

    #mycenter {
        text-align: center;
        justify-content: center;
    }
`

export const Portfolio = () => (
    
    <Styles>
        <h1 id="portfolio-header">Portfolio</h1>
        <Container>
            <div id="mycenter">
                <p id="portfolio-statement">
                    Global investment mandate, at any stage, in any industry.
                </p>
            </div>

            <div id="mycenter">
                
            </div>
        </Container>

    </Styles>
    
)


