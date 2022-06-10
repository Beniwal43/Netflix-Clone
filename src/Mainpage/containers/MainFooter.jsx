import React from 'react';
import styled from 'styled-components/macro';

export default function MainFooter() {
  return (
  <BorderContainer>
    <FooterContainer>
      <FooterTitle> Contact us. +919467697761</FooterTitle>
      <FooterBreak />
      <FooterRow>
        <FooterColumn>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Ways to Watch</FooterLink>
          <FooterLink href="#">Corporate Information</FooterLink>
          <FooterLink href="#">Netflix Originals</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink href="#">Jobs</FooterLink>
          <FooterLink href="#">Help Centre</FooterLink>
          <FooterLink href="#">Terms of Use</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink href="#">Account</FooterLink>
          <FooterLink href="#">Redeem gift cards</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Speed Test</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterLink href="#">Media Centre</FooterLink>
          <FooterLink href="#">Buy gift cards</FooterLink>
          <FooterLink href="#">Cookie Preferences</FooterLink>
          <FooterLink href="#">Legal Notices</FooterLink>
        </FooterColumn>
      </FooterRow>
      <FooterBreak />
      <FooterText>Netflix India</FooterText>
      <FooterCopyRight>&copy; Chetan Raj Beniwal. All right reserved.</FooterCopyRight>
    </FooterContainer>
  </BorderContainer>
  );
}

const FooterCopyRight = styled.small`
color: #757575;
margin-bottom: 5px;
font-size: 15px;
display:flex;
justify-content:center;

`;

const BorderContainer = styled.div`
  border-top: 8px solid #222;
`;

const FooterContainer = styled.div`
  display: flex;
  padding: 70px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;


const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const FooterTitle = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
  display:flex;
  justify-content:center;
`;

export const FooterText = styled.p`
  font-size: 13px;
  color: #757575;
  margin-top: 20px;
  margin-bottom: 10px;
  display:flex;
  justify-content:center;
`;

export const FooterBreak = styled.div`
  flex-basis: 100%;
  height: 0;
`;
