import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 20px 0;
`;

export const HeaderSection = styled.section`
  text-align: center;
  padding: 40px 6%;
  background: linear-gradient(135deg, #8dd3bb 0%, #009965 100%);
  color: white;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
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
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.95;
  }
`;

export const ContentSection = styled.section`
  padding: 60px 6%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.div`
  margin-bottom: 40px;
  h3 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 15px;
    border-bottom: 2px solid #009965;
    padding-bottom: 5px;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #666;
    text-align: justify;
  }
`;
