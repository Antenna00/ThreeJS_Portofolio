import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
background-color: #1756dd32;
display: flex;
flex-direction: column;
align-items: center;
z-index: 99;
`

const Logo = styled.h1`
padding-top: 30vh;
margin: 0;
color: #b50617;
font-weight: 700;
font-size: 55px;
`
const Slogan = styled.h4`
margin: 0;
color: #fff;
font-weight: 700;
font-size: 30px;
margin-top: 1em;
`
const Paragraph = styled.p`
margin: 0;
color: #fff;
font-weight: 500;
font-size: 20px;
line-height: 1.5
margin-top: 5em;
max-width: 30%;
text-align: center;
`

const DonateButton = styled.button`
outline: none;
border: none;
background-color: #25bb1e;
color: #fff;
font-size: 16px;
font-weight: 500;
border-radius: 3px;
padding: 8px 14px;
margin-top: 2em;
cursor: pointer;
`
export function TopSection() {
    return(
    <TopSectionContainer>
        <Logo>Global Warming</Logo>
        <Slogan>Save the Earth</Slogan>
        <Paragraph>
            hogehogefugafugahogehogefugafugahogehoge
            fugafugahogehogefugafugahogehogefugafuga
        </Paragraph>
        <DonateButton>Donate</DonateButton>
    </TopSectionContainer>
    )
}
