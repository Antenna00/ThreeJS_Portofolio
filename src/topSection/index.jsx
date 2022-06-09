import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: #1756dd32;
display: flex;
flex-direction: column;
align-items: center;
z-index: 99;
`

const Logo = styled.h1`
padding-top: 20%;
margin: 0;
color: #fff;
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
margin-top: 1em;
`

const DonateButton = styled.button`

`
export function TopSection() {
    return(
    <TopSectionContainer>
        <Logo>土也王求温暖イヒ</Logo>
        <Slogan>うゎ、土也王求ﾏﾞ/″熱ﾚヽ</Slogan>
        <Paragraph>┐°ﾗｽ于ッ勹ゃめょ</Paragraph>
    </TopSectionContainer>
    )
}
