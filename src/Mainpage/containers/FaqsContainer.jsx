import React from "react";
import { Accordion } from "../components";
import faqsData from "../fixtures/faqs";
import styled from 'styled-components/macro';


export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptFormContainer>
        <OptFormInput placeholder="Email address" />
        <OptFormButton>
          Try it now <img src="/images/icons/chevron-right.png" alt="Arrow" />
        </OptFormButton>
        <OptFormBreak />
        <OptFormText>
          Ready to watch? Enter your email to create or restart your membership.
        </OptFormText>
      </OptFormContainer>
    </Accordion>
  );
}

const OptFormContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const OptFormInput = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    height: 55px;
  }
`;

const OptFormBreak = styled.div`
  flex-basis: 100%;
  height: 0;
`;

const OptFormButton = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

 const OptFormText = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  margin-top:1rem;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

