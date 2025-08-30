
import styled from 'styled-components';


export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 0;
`;


export const HeaderSection = styled.header`
  text-align: center;
  padding: 120px 8% 0;
opacity: 1;
gap: 60px;
border-top-left-radius: 155px;
border-top-right-radius: 155px;
transform: translateY(-120px);

  background-color: white;

  @media (max-width: 440px) {
    padding: 40px 16px 0;
    border-top-left-radius: 52px;
    border-top-right-radius: 52px;
    transform: translateY(-40px);
    gap: 32px;
  }

`;
export const TripSection = styled.header`
margin :100px 0px;


  @media (max-width: 440px) {
    margin :60px 0px;
  }

`;


export const ContentSection = styled.section`
  padding: 0 6%;
  max-width: 2000px;
  margin: 20px auto;
`;


export const Section = styled.article`
  margin-bottom: 40px;

`;
