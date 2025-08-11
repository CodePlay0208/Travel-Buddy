
import styled from 'styled-components';


export const PageContainer = styled.main`
  min-height: 100vh;
  padding: 20px 0;
`;


export const HeaderSection = styled.header`
  text-align: center;
  padding: 40px 6%;
  background: linear-gradient(135deg, #8dd3bb 0%, #009965 100%);
  color: white;

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    line-height: 1.2;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    opacity: 0.9;
  }
  p {
    font-size: 1.2rem;
    max-width: 1000px;
    margin: 0 auto;
    opacity: 0.95;
  }
`;


export const ContentSection = styled.section`
  padding: 0 6%;
  max-width: 2000px;
  margin: 20px auto;
`;


export const Section = styled.article`
  margin-bottom: 40px;

  h3 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 15px;
    border-bottom: 2px solid #009965;
    padding-bottom: 5px;
    line-height: 1.3;
  }
  h4 {
    font-size: 1.5rem;
    color: #555;
    margin-top: 20px;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    text-align: justify;
  }
`;
