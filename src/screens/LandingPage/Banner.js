// File: components/Banner.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BackgroundImg from '../../assets/images/banner/second.png';
import PaperScrap from '../../assets/images/banner/image.png';
import TravelImage from '../../assets/images/banner/center.jpg';
import { useNavigate } from 'react-router-dom';

const BannerWrapper = styled.div`
  position: relative;
  box-shadow: 2px 2px 3px 0px #0000004D;

box-shadow: 4px 6px 26px 8px #00000026;

margin: 0 30px;
  width: 100%-60px;
  max-width: 100%;
  height: 500px;
  background: #9f9f9f;
  border-radius: 40px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 20px;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 65%;
  height: 100%;
  right: 0;
  top: 0;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
`;

const PaperAsset = styled.div`
  z-index: 1;
  position: absolute;
  width: 45%;
  height: 100%;
  left: 0;
  top: 0;
  background-image: url(${PaperScrap});
  background-size: cover;
  filter: drop-shadow(0px 16px 30px rgba(0, 0, 0, 0.15));
`;

const ContentWrapper = styled.div`
  z-index: 2;
  position: relative;
  max-width: 60.5%;
  margin-left: 60px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
    transform: none;
    top: auto;
  }
`;

const Heading = styled.h1`
  font-family: 'Syncopate', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.5rem;
  margin: 0;
  text-transform: uppercase;
  color: #1d425d;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
`;

const Subheading = styled.p`
  font-family: 'SF Pro', sans-serif;
  font-size: 1.25rem;
  margin: 0; 
  color: #505050;
`;

const UploadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 56px;
  border: 2px solid #1d425d;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #1d425d;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: #1d425d;
    color: #ffffff;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const FloatingImage = styled.div`
  z-index: 1;
  position: absolute;
  width: 450px;
  aspect-ratio: 1.43;
  left: 35%;
  top: 50%;
  transform: translateY(-50%) rotate(4deg) skewY(1deg);
  background-image: url(${TravelImage});
  background-size: cover;
  background-position: center;
  border: 16px solid #ffffff;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.15);

  @media (max-width: 1080px) {
    width: 300px;
  }
`;

const TimerWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Teko', sans-serif;

  span.value {
    font-size: 48px;
    font-weight: 700;
    color: #3880b5;
    letter-spacing: 0.11em;
  }

  span.label {
    font-size: 18px;
    color: #3880b5;
    letter-spacing: 0.11em;
    margin-top: -6px;
  }
`;

const Colon = styled.span`
  font-family: 'Teko', sans-serif;
  font-size: 48px;
  font-weight: 700;
  color: #3880b5;
`;

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <TimerWrapper>
      <TimeUnit>
        <span className="value">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="label">Days</span>
      </TimeUnit>
      <Colon>:</Colon>
      <TimeUnit>
        <span className="value">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="label">Hours</span>
      </TimeUnit>
      <Colon>:</Colon>
      <TimeUnit>
        <span className="value">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="label">Minutes</span>
      </TimeUnit>
    </TimerWrapper>
  );
};

const Banner = () => {
  const navigate = useNavigate();
  const deadline = new Date("08/10/2025");
  return (
    <BannerWrapper onClick={() => {
      navigate('/login');
    }}>
      <BackgroundImage />
      <PaperAsset >

        <ContentWrapper>
          <Heading>Show off your travel moments!</Heading>
          <Subheading>
            Share your best travel photo with us & get a chance to win a Travmigos gift hamper.
          </Subheading>
          <CountdownTimer targetDate={deadline} />
          <UploadButton>Upload your picture now!</UploadButton>
        </ContentWrapper>
      </PaperAsset>
      <FloatingImage />
    </BannerWrapper>
  );
};

export default Banner;
