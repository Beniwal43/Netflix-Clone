import "../Css/MainHeader.css";
import styled from 'styled-components/macro';

const MainHeader = () => {
  return (
    <div className="header-container">
      
       <Container>
        <Title>Unlimited films, TV programmes and more.</Title>
          <SubTitle>Watch anywhere. Cancel at any time.</SubTitle>
         <OptFormContainer>
            <OptFormInput placeholder="Email address" />
            <OptFormButton >Get Started <img src="/images/icons/chevron-right.png" alt="Arrow" /></OptFormButton>a
            <OptFormBreak/>
            <OptFormText>Ready to watch? Enter your email to create or restart your membership.</OptFormText>
          </OptFormContainer>
       </Container>
  
    </div>
  );
};

export default MainHeader;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 176px 45px;

`;

const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;
  margin-top:6rem;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 5px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;



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
