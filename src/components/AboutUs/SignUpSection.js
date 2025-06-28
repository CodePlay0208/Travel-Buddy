import React from 'react'
import styled from 'styled-components'

import backgroundImage1 from './secondImage.jpg'
import { Input } from '../../styles/Global'
import { DescriptionField } from '../../screens/PublishTrip/PublishTrip.styled'

const FrameTwo = styled.div`
  width: 100%;
  height: 690px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 100px;

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 40px;
    height: 100%;
    align-items: flex-end;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0 0 0 9%;
  gap: 40px;
  width: 50%;

  @media (max-width: 440px) {
    width: 100%;
    padding: 0 16px;
    align-items: center;
    gap: 32px;
  }
`

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`

const Title = styled.h1`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 3.25rem;
  line-height: 120%;
  color: #000000;

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`

const SubTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  @media (max-width: 440px) {
    gap: 22px;
    width: 100%;
    height: auto;
  }
`
const SvgContainer = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  justify-content: center;
  align-items: center;

  p {
    width: 90%;
  }
  @media (max-width: 440px) {
    width: 100%;
    height: auto;
  }
`

const SubTitle = styled.p`
  margin: 0;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 1.9rem;
  line-height: 140%;
  letter-spacing: 0%;

  color: #000000;
  .black {
    color: #000;
  }

  @media (max-width: 440px) {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0%;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
  height: 690px;
  background: url(${backgroundImage1});
  background-position: center;
  border-radius: 0 112.5px 112px 0;
  transform: scaleX(-1);

  @media (max-width: 440px) {
    width: 95%;
    height: 345px;
    padding: 0 0 0 5%;
    border-top-right-radius: 53.17px;
    border-bottom-right-radius: 52.93px;
  }
`

const SignUpSection = () => {
  return (
    <FrameTwo>
      <Content>
        <TitleGroup>
          <Title>Why Travmigoz?</Title>
        </TitleGroup>
        <SubTitleGroup>
          <SvgContainer>
            <svg width="56" height="58" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.27273" y="2.03054" width="53.4545" height="53.9394" rx="26.7273" stroke="black" stroke-width="2.54545" />
              <path d="M26.4457 40V19.6364L28.673 21.8636H21.9912V17.7273H31.6003V40H26.4457Z" fill="black" />
            </svg>
            <SubTitle>Handpicked, verified tour vendors</SubTitle>
          </SvgContainer>

          <SvgContainer>
            <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.27273" y="1.27273" width="53.4545" height="53.9394" rx="26.7273" stroke="black" stroke-width="2.54545" />
              <path
                d="M19.6646 39.2422V35.9013L28.2555 27.7876C28.9343 27.1725 29.4328 26.621 29.7509 26.1331C30.0691 25.6452 30.2812 25.1998 30.3873 24.7967C30.5146 24.3937 30.5782 24.0225 30.5782 23.6831C30.5782 22.7922 30.2706 22.1134 29.6555 21.6467C29.0616 21.1589 28.1812 20.9149 27.0146 20.9149C26.0812 20.9149 25.2116 21.0952 24.4055 21.4558C23.6206 21.8164 22.9525 22.3785 22.4009 23.1422L18.6464 20.724C19.4949 19.4513 20.6828 18.4437 22.21 17.7013C23.7373 16.9589 25.4979 16.5876 27.4919 16.5876C29.1464 16.5876 30.5888 16.8634 31.8191 17.4149C33.0706 17.9452 34.0358 18.6982 34.7146 19.674C35.4146 20.6498 35.7646 21.8164 35.7646 23.174C35.7646 23.8952 35.6691 24.6164 35.4782 25.3376C35.3085 26.0376 34.9479 26.7801 34.3964 27.5649C33.8661 28.3498 33.0813 29.2301 32.0419 30.2058L24.9146 36.9195L23.9282 35.0422H36.4964V39.2422H19.6646Z"
                fill="black"
              />
            </svg>
            <SubTitle>A wide variety of packages tailored to different budgets and interests</SubTitle>
          </SvgContainer>
          <SvgContainer>
            <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.27273" y="1.27273" width="53.4545" height="53.9394" rx="26.7273" stroke="black" stroke-width="2.54545" />
              <path
                d="M27.0471 39.624C25.4987 39.624 23.9608 39.4225 22.4335 39.0195C20.9062 38.5952 19.6123 38.0013 18.5517 37.2376L20.5562 33.2922C21.4047 33.9073 22.3911 34.3952 23.5153 34.7558C24.6396 35.1164 25.7744 35.2967 26.9199 35.2967C28.2138 35.2967 29.232 35.0422 29.9744 34.5331C30.7168 34.024 31.0881 33.324 31.0881 32.4331C31.0881 31.5846 30.7593 30.9164 30.1017 30.4286C29.4441 29.9407 28.3835 29.6967 26.9199 29.6967H24.5653V26.2922L30.7699 19.2604L31.3426 21.1058H19.6653V16.9695H35.2562V20.3104L29.0835 27.3422L26.4744 25.8467H27.9699C30.7062 25.8467 32.7744 26.4619 34.1744 27.6922C35.5744 28.9225 36.2744 30.5028 36.2744 32.4331C36.2744 33.6846 35.9456 34.8619 35.2881 35.9649C34.6305 37.0467 33.6229 37.927 32.2653 38.6058C30.9078 39.2846 29.1684 39.624 27.0471 39.624Z"
                fill="black"
              />
            </svg>
            <SubTitle>Honest reviews and transparent communication</SubTitle>
          </SvgContainer>
          <SvgContainer>
            <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.27273" y="1.27273" width="53.4545" height="53.9394" rx="26.7273" stroke="black" stroke-width="2.54545" />
              <path
                d="M18.0163 34.5649V31.0967L28.5163 16.9695H33.9253L23.6481 31.0967L21.1344 30.3649H38.6663V34.5649H18.0163ZM30.0117 39.2422V34.5649L30.1708 30.3649V26.1967H35.039V39.2422H30.0117Z"
                fill="black"
              />
            </svg>
            <SubTitle>Secure and simple booking process</SubTitle>
          </SvgContainer>
        </SubTitleGroup>
      </Content>
      <ImageWrapper />
    </FrameTwo>
  )
}

export default SignUpSection
