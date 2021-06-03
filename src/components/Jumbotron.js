import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .jumbotron {
        background: #000;
        height: 78vh;
        margin-left: 4vw;
        margin-right: 4vw;
        margin-top: 17vh;
        // position: relative;
        margin-bottom: 10vh;
        align-text: center;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid classname="jumbo">
            <div classname="overlay"></div>
            <Container>
                Hello World
            </Container>
        </Jumbo>
    </Styles>
)