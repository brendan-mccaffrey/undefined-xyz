import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';


export const Bars = styled(FaBars)`
    display: none;
    color: #000;

    @media screen and (max-width: 1000px) {
        display: block;
        position: absolute;
        top: 4vh;
        right: 5vw;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const NavBtnLink = styled.div`
    border-redius: 4px;
    background: #fff;
    padding: 10px 22px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #000;
        color: #fff;
    }
`
