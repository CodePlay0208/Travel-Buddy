import styled from 'styled-components';

export const Frame = styled.div`
  position: relative;
  width: 100%;
  max-width: 1730px;
  margin: 10% auto;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Rectangle40 = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1729px;
  height: 65%;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(141, 211, 187, 0.28);

  @media (max-width: 1024px) {
    height: 50%;
    top: 15%;
  }

  @media (max-width: 768px) {
    height: 40%;
    top: 10%;
  }

  @media (max-width: 480px) {
    height: 30%;
    top: 5%;
  }
`;

export const Heading = styled.h1`
  position: absolute;
  width: 80%;
  max-width: 469px;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 42px;
  color: #000000;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 32px;
    top: 20%;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    top: 15%;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    top: 10%;
  }
`;

export const ExploreButton = styled.button`
  position: absolute;
  width: 50%;
  max-width: 462px;
  height: 15%;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  background: #8dd3bb;
  border-radius: 10px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #000000;
  cursor: pointer;

  &:hover {
    background: #76b39d;
  }

  @media (max-width: 1024px) {
    width: 70%;
    height: 12%;
    top: 85%;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 10%;
    top: 85%;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: 8%;
    top: 80%;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  width: 100%;
  top: 40%;
  padding: 0 10px;

  @media (max-width: 1024px) {
    top: 35%;
  }

  @media (max-width: 768px) {
    top: 30%;
  }

  @media (max-width: 480px) {
    top: 25%;
  }
`;

export const LocationBox = styled.button`
  box-sizing: border-box;
  margin: 0 5%;
  width: 20%;
  max-width: 386px;
  height: 75px;
  background: #ffffff;
  border: 1px solid #e4cdcd;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #112211;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
    border-color: #ccc;
  }

  @media (max-width: 1024px) {
    width: 45%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;
